import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        notification: {
            show: false,
            message: ''
        }
    }),
    actions: {
        addNotification(notification) {
            this.notification.show = notification.show;
            this.notification.message = notification.message;
        }
    }
})