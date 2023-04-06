<template>
    <main class="container text-center overflow-hidden">
        <div class="row position-relative">
            <router-view />
        </div>
        <Footer />
    </main>
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>

<style lang="scss">
@font-face {
    font-family: "Glacial Indifference";
    src: local("Glacial Indifference"),
        url('./assets/fonts/glacial-indifference.regular.otf') format("truetype");
}

@font-face {
    font-family: "Abbaya Libre";
    src: local("Abbaya Libre"),
        url('./assets/fonts/AbhayaLibre-Regular.ttf') format("truetype");
}

@font-face {
    font-family: "Abril Fatface";
    src: local("Abril Fatface"),
        url('./assets/fonts/AbrilFatface-Regular.ttf') format("truetype");
}

@font-face {
    font-family: "TeX Gyre Termes";
    src: local("TeX Gyre Termes"),
        url('./assets/fonts/tex-gyre-termes.italic.otf') format("truetype");
}


@font-face {
    font-family: "Futura Lt BT";
    src: local("Futura Lt BT"),
        url('./assets/fonts/FUTURAL.ttf') format("truetype");
}

@font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
        url('./assets/fonts/Montserrat-Regular.ttf') format("truetype");
}

@font-face {
    font-family: "Raleway";
    src: local("Raleway"),
        url('./assets/fonts/Raleway-Regular.ttf') format("truetype");
}

@font-face {
    font-family: "Cinzel";
    src: local("Cinzel"),
        url('./assets/fonts/Cinzel-Regular.ttf') format("truetype");
}

@font-face {
    font-family: "Pantole";
    src: local("Pantole"),
        url('./assets/fonts/Pantole.ttf') format("truetype");
}

body {
    padding-right: 0 !important;
}

main {
    max-width: 420px !important;
    margin: 0 auto;
    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
    background: white;
    border-radius: 3px;
    padding-bottom: 97px;
    color: #000;
}

a {
    text-decoration: none !important;
    color: #b1a785 !important;
}

.heading {
    font-family: 'Pantole', sans-serif;
    font-size: 2.5rem;
}

hr {
    border-top: 3px solid #E2DFDE !important;
    opacity: 1 !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 0 !important;
}

label {
    font-family: 'Montserrat', sans-serif;
}

.main-btn {
    width: 100%;
    color: #fff;
    background-color: #b1a785;
    border: 0;
    display: inline-block;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.main-btn:hover {
    background-color: #d4cfbc;
}

.offcanvas-bottom {
    margin: 0 auto 97px auto !important;
    width: 420px !important;
    height: auto !important;

    img {
        height: 40px;
    }

    p {
        font-size: 14px;
        line-height: 1.2;
        padding-top: 0.25rem;
    }
}
</style>
