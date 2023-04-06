<template>
    <div id="guestbook-carousel" class="carousel slide h-100">
        <div class="carousel-inner">
            <div v-for="(wish, index) in guestbook" :class="['carousel-item', index == 0 ? 'active' : '']">
                <p class="overflow-hidden">{{ wish.message }}</p>
                <span>- {{ wish.name }} -</span>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#guestbook-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#guestbook-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
import { collection, onSnapshot } from 'firebase/firestore';
import { ref, onMounted } from 'vue';
import { db } from '../../firebase';

const guestbook = ref([])

onMounted(async () => {
    onSnapshot(collection(db, 'guestbook'), (querySnapshot) => {
        const wishes = [];
        querySnapshot.forEach((doc) => {
            const wish = {
                id: doc.id,
                message: doc.data().message,
                name: doc.data().name
            }
            wishes.push(wish)
        });
        guestbook.value = wishes;
    });
})
</script>

<style lang="scss">
.carousel {

    .carousel-inner {
        padding: 2rem;

        p {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            font-family: "Futura Lt BT", sans-serif;
        }

        span {
            font-family: 'Futura Lt BT', sans-serif;
            font-style: italic;
        }
    }

    .carousel-control-next {
        right: -9%;
        width: 7%;

        .carousel-control-next-icon {
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>") !important;
        }

    }

    .carousel-control-prev {
        left: -9%;
        width: 7%;

        .carousel-control-prev-icon {
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
        }
    }
}
</style>