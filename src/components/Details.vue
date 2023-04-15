<template>
    <div class="details col-12 position-relative">
        <div class="row bg">
            <template v-if="router.currentRoute.value.name === 'home'">
                <Countdown />
                <div class="details-wrapper col-10 mx-auto py-4 px-3">
                    <img class="mb-2" data-aos="zoom-in-up" data-aos-duration="1000" src="../assets/images/salam.png">

                    <!-- <p data-aos="zoom-in-up" data-aos-duration="1000">Dengan izin Allah SWT dan
                        rahmatnya, kami
                    </p> -->

                    <div class="my-4 details-parent">
                        <h5 data-aos="zoom-in-up" data-aos-duration="1000">Zakaria Bin<br>Mat Diar</h5>
                        <h5 data-aos="zoom-in-up" data-aos-duration="1000">&amp;</h5>
                        <h5 data-aos="zoom-in-up" data-aos-duration="1000">Mastura Binti<br>Mohamad Sani</h5>
                    </div>

                    <p class="mb-0" data-aos="zoom-in-up" data-aos-duration="1000">
                        dengan penuh rasa kesyukuran, hormat dan takzimnya menjemput<br>
                        Dato' / Datin / Tuan / Puan / Encik / Cik<br>
                        hadir ke majlis perkahwinan puteri kami.
                    </p>

                    <div class="my-5 details-couple">
                        <h4 data-aos="zoom-in-up" data-aos-duration="1000">Nur'ain Nabiela<br>Binti Zakaria</h4>
                        <h4 data-aos="zoom-in-up" data-aos-duration="1000">&amp;</h4>
                        <h4 data-aos="zoom-in-up" data-aos-duration="1000">Muhammad Zuhaily<br>Bin Ramzi</h4>
                    </div>

                    <h6 class="mb-1" data-aos="zoom-in-up" data-aos-duration="1000">Tarikh</h6>
                    <p data-aos="zoom-in-up" data-aos-duration="1000">Sabtu, 6 Mei 2023 | 15 Syawal 1444H</p>

                    <h6 class="mb-1" data-aos="zoom-in-up" data-aos-duration="1000">Masa</h6>
                    <p data-aos="zoom-in-up" data-aos-duration="1000">11:00 AM - 5:00 PM</p>

                    <h6 class="mb-1" data-aos="zoom-in-up" data-aos-duration="1000">Tempat</h6>
                    <p data-aos="zoom-in-up" data-aos-duration="1000">Gold Coast Morib Resort, PT 294, Kawasan Kanchong
                        Laut, Morib Beach,
                        42700 Banting, Selangor</p>

                    <p class="mt-5" data-aos="zoom-in-up" data-aos-duration="1000">Semoga dengan kehadiran tuan /
                        puan akan menyerikan lagi majlis kami dan diberkati Allah SWT.<br>Insha-Allah. Wassalam.
                    </p>

                    <Timeline />

                    <button @click="router.push({ name: 'rsvp' })" class="main-btn mt-3" data-aos="zoom-in-up"
                        data-aos-duration="1000">SILA SAHKAN<br>KEHADIRAN ANDA</button>
                    <a href="https://mywishlist.online/w/w2qesq/nabiela-zuhaily-wedding-gifts-wishlist" target="_blank" class="main-btn mt-3" data-aos="zoom-in-up"
                        data-aos-duration="1000"><font-awesome-icon icon="fa-solid fa-gift" /> &nbsp;HADIAH</a>
                </div>
            </template>
            <template v-else-if="router.currentRoute.value.name === 'rsvp'">
                <div class="details-wrapper col-10 mx-auto py-4 px-4">
                    <p class="mb-0">R.S.V.P</p>
                    <h5 class="heading">Répondez s'il vous plaît</h5>
                    <hr>
                    <div class="my-5 details-couple">
                        <h4 data-aos="zoom-out-right" data-aos-duration="1250">Nur'ain Nabiela<br>Binti Zakaria</h4>
                        <h4 data-aos="zoom-out-right" data-aos-duration="1250" data-aos-delay="300">&</h4>
                        <h4 data-aos="zoom-out-right" data-aos-duration="1250" data-aos-delay="600">Muhammad Zuhaily<br>Bin
                            Ramzi</h4>
                    </div>
                    <div class="mb-4" data-aos="zoom-out-right" data-aos-duration="1250" data-aos-delay="900">
                        <p class="mb-0">6 Mei 2023</p>
                        <p>Gold Coast Morib Resort, PT 294, Kawasan Kanchong
                            Laut, Morib Beach,
                            42700 Banting, Selangor</p>
                    </div>
                    <hr>
                    <RSVPForm />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Countdown from './Countdown.vue'
import Timeline from './Itinerary.vue'
import RSVPForm from './RSVPForm.vue';

const router = useRouter()

const props = defineProps({
    page: String
})
</script>

<style lang="scss" scoped>
.details {
    // border-top: 5px solid #E2DFDE;
    border-bottom: 5px solid #E2DFDE;

    .bg {
        background: url('../assets/images/details.png');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        padding: 25px 0;

        .details-wrapper {
            border-radius: 8px;
            box-shadow: 0px 0px 10px 0px #e2dfde;
            background-color: #FCF9F2;

            img {
                width: 210px;
            }

            p {
                font-size: 13px;
                font-family: 'Raleway', sans-serif;
                color: #000;
            }

            h6 {
                @extend p;
                font-weight: 600;
                text-transform: uppercase;
            }

            .details-couple {
                h4 {
                    font-family: 'Cinzel', sans-serif;
                    line-height: 1.2em;
                    letter-spacing: 1px;
                    color: #85756D;
                    text-transform: uppercase;
                }
            }

            .details-parent {
                h5 {
                    font-family: 'Raleway', sans-serif;
                    line-height: 1.2em;
                    letter-spacing: 1px;
                    color: #000;
                    text-transform: uppercase;
                    font-size: 1.25rem;
                }
            }
        }
    }
}
</style>