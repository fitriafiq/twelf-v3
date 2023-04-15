<template>
    <div class="admin col-10 mx-auto p-4 my-4">
        <div class="row mx-auto">
            <div class="card col-6 text-center p-0">
                <div class="card-header">
                    Tetamu<br>Hadir
                </div>
                <div class="card-body">
                    <h4 class="card-title">{{ guestAttendingCount }}</h4>
                </div>
            </div>
            <div class="card col-6 text-center p-0">
                <div class="card-header">
                    Tetamu<br>Tidak Hadir
                </div>
                <div class="card-body">
                    <h4 class="card-title">{{ guestNotAttendingCount.length }}</h4>
                </div>
            </div>
        </div>
        <div class="mb-4 mt-5">
            <label class="mb-2">Kehadiran Tetamu</label>
            <select v-model="attendance" class="form-select">
                <option value="yes">Ya</option>
                <option value="no">Tidak</option>
            </select>
        </div>

        <div class="mb-4">
            <label class="mb-2">Carian Tetamu</label>
            <input v-model="search" type="text" class="form-control">
        </div>
        <button @click="downloadGuestList" class="main-btn">DOWNLOAD TETAMU</button>
        <div class="table-responsive mt-5">
            <table class="table table-striped table-hover" id="result">
                <thead>
                    <tr>
                        <th>TETAMU</th>
                        <th v-if="attendance == 'yes'">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="guest in filteredGuest">
                        <td class="text-start align-middle">
                            {{ guest.name }}<br><span>( {{ guest.contact }} )</span>
                        </td>
                        <td v-if="attendance == 'yes'" class="align-middle">{{ guest.total }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import exportFromJSON from "export-from-json";

const guestList = ref([])
const attendance = ref('yes')
const search = ref('')

onMounted(() => {
    onSnapshot(query(collection(db, 'rsvp'), orderBy('datetime', 'desc')), (querySnapshot) => {
        const guests = [];
        querySnapshot.forEach((doc) => {
            const guest = {
                id: doc.id,
                attendance: doc.data().attendance,
                contact: doc.data().contact,
                datetime: doc.data().datetime,
                name: doc.data().name,
                total: doc.data().total
            }
            guests.push(guest)
        });
        guestList.value = guests
    })
})

const guestAttendingCount = computed(() => {
    let count = 0
    guestList.value.filter(guest => guest.attendance == 'yes').forEach(guest => count += guest.total)
    return count
})

const guestNotAttendingCount = computed(() => {
    return guestList.value.filter(guest => guest.attendance == 'no')
})

const filteredGuest = computed(() => {
    return guestList.value.filter(guest => guest.name.includes(search.value) && guest.attendance == attendance.value)
})

const downloadGuestList = () => {
    const exportGuestList = []

    guestList.value.filter(guest => guest.name.includes(search.value) && guest.attendance == attendance.value).forEach(guest => {
        let submittedDate = new Date(guest.datetime.seconds * 1000)
        let datetime = submittedDate.getDate() + '/' + submittedDate.getMonth() + '/' + submittedDate.getFullYear() + ' ' + submittedDate.getHours() + ':' + submittedDate.getMinutes()
        const exportGuest = {
            Datetime: datetime,
            Attendance: guest.attendance,
            Name: guest.name,
            Contact: guest.contact,
            TotalGuest: guest.total,
        }
        exportGuestList.push(exportGuest)
    })

    const data = exportGuestList
    const fileName = "guestlist";
    const exportType = exportFromJSON.types.csv

    data ? exportFromJSON({ data, fileName, exportType }) : ''
}

</script>

<style lang="scss">
.admin {
    box-shadow: 0px 0px 10px 0px #E2DFDE;

    table {
        td {
            font-family: 'Futura Lt BT', sans-serif;
            font-size: 15px;
            line-height: 1.2;

            span {
                font-size: 12px;
                letter-spacing: 0;
                font-style: italic;
            }
        }
    }
}
</style>