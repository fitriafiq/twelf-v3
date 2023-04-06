<template>
    <Details />
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from "aos";
import Details from '../components/Details.vue';

onMounted(() => {
    AOS.init();
})
</script>

<style lang="scss" scoped></style>