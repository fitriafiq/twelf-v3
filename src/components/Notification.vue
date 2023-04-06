<template>
    <div class="notification d-flex position-fixed start-50 translate-middle-x justify-content-center">
        <div ref="toast" class="toast align-items-center text-white bg-secondary border-0 hide" id="toast-guestbook"
            role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    {{ notificationStore.notification.message }}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                    aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Toast } from 'bootstrap'
import { ref, onUpdated, onMounted } from 'vue';
import { useNotificationStore } from '../store/NotificationStore'

const notificationStore = useNotificationStore()
const toast = ref(null)

const showNotification = () => {
    if (notificationStore.notification.show) {
        let toastElement = new Toast(toast.value)
        toastElement.show()

        setTimeout(() => {
            notificationStore.notification.show = false
            notificationStore.notification.message = ''
        }, 6000);
    }
}

onUpdated(() => {
    showNotification()
})

onMounted(() => {
    showNotification()
})
</script>

<style lang="scss">
.notification {
    top: 20px;
}
</style>