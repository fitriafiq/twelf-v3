import { defineStore } from 'pinia'

export const useSlotStore = defineStore('slotStore', {
    state: () => ({
        slots: [
            {
                id: 1,
                time: '12:00 - 1:30',
                assign: 'Keluarga & Saudara Mara',
                current: 0,
                max: 150
            },
            {
                id: 2,
                time: '1:30 - 3:00',
                assign: 'Tetamu / Rakan Ibu Bapa & Pengantin',
                current: 0,
                max: 150
            }
        ]
    }),
    actions: {
        countSlot(slotCount) {
            this.slots.forEach(slot => {
                if (slot.id == slotCount.id) {
                    slot.current += slotCount.total
                }
            })
        },
        resetCounter() {
            this.slots.forEach(slot => {
                slot.current = 0
            })
        }
    }
})