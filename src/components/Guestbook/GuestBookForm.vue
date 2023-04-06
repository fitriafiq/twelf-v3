<template>
    <div class="guestbook-form offcanvas offcanvas-end text-center" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header position-relative p-0 pt-2">
            <h5 class="offcanvas-title w-100 heading" id="offcanvasExampleLabel">Guest Book</h5>
            <button ref="closeForm" type="button" class="btn-close text-reset position-absolute" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body pt-0">
            <hr>
            <form @submit.prevent="addWish">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                    <input v-model="name" required type="text" class="form-control">
                </div>
                <div class="mb-4">
                    <label for="exampleFormControlTextarea1" class="form-label">Ucapan</label>
                    <textarea v-model="message" required class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <button class="main-btn">HANTAR</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref } from 'vue'
import { db } from '../../firebase'
import { useNotificationStore } from '../../store/NotificationStore'

const name = ref('')
const message = ref('')
const closeForm = ref(null)
const notificationStore = useNotificationStore()

const addWish = () => {
    addDoc(collection(db, 'guestbook'), {
        name: name.value,
        message: message.value,
        datetime: serverTimestamp()
    });

    name.value = ''
    message.value = ''

    notificationStore.addNotification({
        show: true,
        message: 'Thank you for the wish!'
    })

    closeForm.value.click()
}

</script>

<style lang="scss">
.guestbook-form {
    .offcanvas-header {
        button {
            right: 15px;
        }
    }
}
</style>