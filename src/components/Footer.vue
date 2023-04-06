<template>
    <nav class="bg-dark bottom-0 start-50 position-fixed translate-middle-x">
        <div class="row pb-1 gx-0">
            <button class="col d-flex flex-column align-items-center" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasContact">
                <font-awesome-icon icon="fa-solid fa-phone" size="lg" />
                <span class="mt-1">HUBUNGI</span>
            </button>
            <button class="col d-flex flex-column align-items-center" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLocation">
                <font-awesome-icon icon="fa-solid fa-location-dot" size="lg" />
                <span class="mt-1">LOKASI</span>
            </button>
            <!-- <button class="col d-flex flex-column align-items-center" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLive">
                <font-awesome-icon icon="fa-solid fa-video" size="lg" />
                <span class="mt-1">LIVE</span>
            </button> -->
        </div>
        <footer class="row gx-0">
            <div class="col-12 mx-auto">
                <p class="my-1">Create e-invitation with <a target="_blank" href="https://wa.link/cj56z6">Twelf</a></p>
            </div>
        </footer>
    </nav>
    <Teleport to="body">
        <OffcanvasContact />
        <OffcanvasLocation />
        <!-- <OffcanvasLive /> -->
    </Teleport>
</template>

<script setup>
import OffcanvasContact from './Offcanvas/OffcanvasContact.vue';
import OffcanvasLocation from './Offcanvas/OffcanvasLocation.vue';
// import OffcanvasLive from './Offcanvas/OffcanvasLive.vue';
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    max-width: 420px;
    padding: 0.55rem 0 0.45rem 0;
    z-index: 1046;

    button {
        font-weight: 500;
        background-color: #212529;
        border: 0;
        color: white;

        span {
            font-size: 0.75rem;
        }
    }

    footer {
        border-top: 3px solid #ded8d0;

        p {
            color: #FFF;
            font-size: 15px;
            font-style: italic;
        }
    }
}
</style>