<template>
    <Hero />
    <Details />
    <Guestbook />
    <Notification />
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from "aos";
import Hero from '../components/Hero.vue';
import Details from '../components/Details.vue';
import Guestbook from '../components/Guestbook/Guestbook.vue';
import Notification from '../components/Notification.vue';

onMounted(() => {
    AOS.init();
})
</script>

<style lang="scss" scoped></style>