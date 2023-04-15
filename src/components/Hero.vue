<template>
    <div class="hero col-12 position-relative p-0">
        <img class="hero-img" src="../assets/images/hero.png">
        <div class="position-absolute w-100 h-100 top-0">
            <div class="hero-header position-absolute w-100">
                <img src="../assets/images/walimatulurus.png">
                <p class="hero-heading mb-0">Walimatul 'Urus</p>
            </div>

            <p class="hero-bride-initial position-absolute w-100" data-aos="fade-right" data-aos-duration="1500">ﻥ</p>
            <p class="hero-bride position-absolute w-100" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">Nabiela</p>
            <img class="hero-middle position-absolute" data-aos="zoom-out-up" data-aos-duration="1750" data-aos-delay="800" src="../assets/images/flower.png">
            <p class="hero-groom-initial position-absolute w-100" data-aos="fade-left" data-aos-duration="1500">ﺯ</p>
            <p class="hero-groom position-absolute w-100" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">Zuhaily</p>

            <div class="hero-date position-absolute w-100" data-aos="fade-up" data-aos-duration="1500">
                <div class="col-5 mx-auto">
                    <div class="row">
                        <div class="hero-date-day col-6 d-flex justify-content-end align-items-center pe-2">
                            <p class="mb-0">Sabtu</p>
                        </div>
                        <div class="hero-date-year col-6 d-flex flex-row justify-content-start align-items-center ps-2">
                            <span class="mb-0 pe-1">6</span>
                            <span class="mb-0 text-start">2023<br>Mei</span>
                        </div>
                        <div class="hero-date-location col-12">
                            <p class="hero-heading mb-0 pt-1">Gold Coast Morib Resort, Banting, Selangor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-footer position-absolute translate-middle start-50 text-center w-100">
                <img src="../assets/images/hashtag.png">
                <p class="hero-hashtag">#ZunNurain</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hero {
    border-bottom: 5px solid #E2DFDE;
    color: #85756D;

    .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        height: 739.86px;
    }

    .hero-header {
        top: 14%;
        left: 0;
        font-family: "Glacial Indifference", sans-serif;
        font-size: 15px;
        letter-spacing: 1px;

        img {
            width: 115px;
        }
    }

    @mixin bride-groom($size, $top, $left) {
        font-family: 'Abhaya Libre';
        text-transform: uppercase;
        font-size: $size;
        top: $top;
        left: $left;
        line-height: 0;
    }

    .hero-bride {
        @include bride-groom($size: 1.25rem, $top: 52%, $left: -29%);
    }

    .hero-bride-initial {
        @include bride-groom($size: 6.5rem, $top: 42%, $left: -29%);
    }

    .hero-middle {
        top: 32%;
        left: 37%;
        width: 137px;
    }

    .hero-groom {
        @include bride-groom($size: 1.25rem, $top: 52%, $left: 29%);
    }

    .hero-groom-initial {
        @include bride-groom($size: 6.5rem, $top: 42%, $left: 29%);
    }

    .hero-date {
        top: 70%;

        .hero-date-day {
            border-right: 1.5px solid #85756D;
            font-family: "Abril Fatface", sans-serif;
            text-transform: uppercase;
            font-size: 24px;
        }

        .hero-date-year {
            border-left: 1.5px solid #85756D;
            font-family: "Abril Fatface", sans-serif;
            line-height: 0.9;
            text-transform: uppercase;

            span:first-child {
                font-size: 37px;
            }

            span:last-child {
                font-size: 24px;
            }
        }

        .hero-date-location {
            font-family: "Glacial Indifference", sans-serif;
            font-size: 15px;
            border-top: 2.5px solid #85756D;
        }
    }

    .hero-footer {
        bottom: -2%;
        font-family: 'TeX Gyre Termes', sans-serif;
        font-size: .75rem;
        font-style: italic;
        
        img {
            width: 100px;
        }
    }

}
</style>