<template>
    <div class="guestbook col-12 mx-auto">
        <h5 class="heading">Guest Book</h5>
        <div class="row">
            <div class="col-10 mx-auto position-relative guestbook-wrapper mb-3">
                <div class="guestbook-border position-absolute top-0 end-0"></div>
                <div class="guestbook-border position-absolute bottom-0 start-0"></div>
                <GuestbookCarousel />
            </div>
            <div class="col-10 mx-auto mb-4 mt-2">
                <button class="main-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">BERIKAN UCAPAN</button>
            </div>
        </div>
    </div>
    <GuestbookForm />
</template>

<script setup>
import GuestbookCarousel from './GuestbookCarousel.vue';
import GuestbookForm from './GuestbookForm.vue';

</script>

<style lang="scss">
.guestbook {
    padding: 25px 0;
    border-bottom: 5px solid #E2DFDE;

    .guestbook-wrapper {
        background: linear-gradient(320deg, #E2DFDE 0%, rgb(252, 252, 252) 25%, rgb(252, 252, 252) 75%, #E2DFDE 100%);
        height: 15rem;
        padding: 0;

        .guestbook-border {
            height: 2px;
            width: 100%;
            background-color: #E2DFDE;
        }
    }

    .guestbook-more {
        color: #000;
        font-size: 0.9rem;
        cursor: pointer;
    }

    .guestbook-more:hover {
        color: #E2DFDE;
    }
}
</style>