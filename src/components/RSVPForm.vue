<template>
    <form @submit.prevent="addGuest" class="my-4">
        <div class="mb-4">
            <label class="mb-2">Kehadiran</label>
            <div class="btn-group w-100" role="group">
                <input v-model="guestAttendance" type="radio" class="btn-check" name="attendance" value="yes"
                    id="attendanceyes" required checked>
                <label class="btn btn-outline-secondary" for="attendanceyes">YA</label>

                <input v-model="guestAttendance" type="radio" class="btn-check" name="attendance" value="no"
                    id="attendanceyesno" required>
                <label class="btn btn-outline-secondary" for="attendanceyesno">TIDAK</label>
            </div>
        </div>

        <div class="mb-4">
            <label class="mb-2">Nama Tetamu</label>
            <input v-model="guestName" required type="text" class="form-control">
        </div>

        <div class="mb-4">
            <label class="mb-2">Nombor Telefon</label>
            <input @keyup="numberChecker" v-model="guestContact" inputmode="numeric" required type="tel"
                class="form-control">
        </div>

        <div v-if="guestAttendance == '0'" class="mb-4">
            <label class="mb-2">Slot Kehadiran</label>
            <div class="btn-group-vertical w-100 slot-radio" role="group">
                <template v-for="slot in slots">
                    <input v-model="guestSlot" type="radio" class="btn-check" name="slot" :value="slot.id"
                        :id="'slot-' + slot.id" required>
                    <label class="btn btn-outline-secondary pb-3 w-100" :for="'slot-' + slot.id">
                        <p class="mb-0">{{ slot.time }}<br>{{ slot.assign }}</p>
                        <!-- <span>{{ slot.current }} / {{ slot.max }}</span> -->
                    </label>
                </template>
            </div>
        </div>

        <div v-if="guestAttendance == 'yes'" class="mb-5">
            <label class="mb-2">Bilangan kehadiran</label>
            <input @keyup="slotChecker" v-model="guestTotal" min="1" required type="number"
                class="form-control">
        </div>
        <button class="main-btn">HANTAR RSVP</button>
    </form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { ref, onMounted, reactive } from 'vue'
import { db } from '../firebase/index'
import { useNotificationStore } from '../store/NotificationStore'
import { useSlotStore } from '../store/SlotStore'

const router = useRouter()
const notificationStore = useNotificationStore()
const slotStore = useSlotStore()

const slots = reactive(slotStore.slots)

const guestAttendance = ref('yes')
const guestName = ref('')
const guestContact = ref('')
const guestSlot = ref('')
const guestTotal = ref('')

const addGuest = () => {
    let doc = {}
    // if (guestAttendance.value == 'yes') {
    //     doc = {
    //         attendance: guestAttendance.value,
    //         contact: guestContact.value,
    //         datetime: serverTimestamp(),
    //         name: guestName.value,
    //         slot: guestSlot.value,
    //         total: guestTotal.value
    //     }
    // } else {
        doc = {
            attendance: guestAttendance.value,
            contact: guestContact.value,
            datetime: serverTimestamp(),
            name: guestName.value,
            total: guestAttendance.value == 'yes' ? guestTotal.value : 0
        }
    // }

    addDoc(collection(db, 'rsvp'), doc)

    guestAttendance.value = 'no'
    guestName.value = ''
    guestContact.value = ''
    guestSlot.value = ''
    guestTotal.value = ''

    notificationStore.addNotification({
        show: true,
        message: 'Thank you for submitting!'
    })

    router.push({ name: 'home' })
}

const numberChecker = () => {
    guestContact.value = guestContact.value.replace(/\D+/g, '')
}

const slotChecker = () => {
    slots.forEach(slot => {
        if (guestSlot.value == slot.id) {
            if ((guestTotal.value + slot.current) > slot.max) {
                guestTotal.value = slot.max - slot.current
            }
        }
    })
}

onMounted(() => {
    onSnapshot(collection(db, 'rsvp'), querySnapshot => {
        slotStore.resetCounter()
        querySnapshot.forEach(doc => {
            slotStore.countSlot({ id: doc.data().slot, total: doc.data().total })
        });
    })

})

</script>

<style lang="scss">
.slot-radio {
    label {
        span {
            background-color: #ededed;
            color: #000;
            padding: 0.1rem 0.8rem 0.15rem;
            border-radius: 7px;
        }
    }
}
</style>