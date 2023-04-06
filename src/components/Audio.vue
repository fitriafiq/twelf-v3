<template>
    <audio class="d-none" ref="audioPlayer" controls>
        <source src="../assets/audio.mp3" type="audio/mp3">
    </audio>
    <font-awesome-icon v-if="showAudioButton" @click="toggleAudio" icon="fa-solid fa-circle-play" size="2xl" />
    <font-awesome-icon v-if="!showAudioButton" @click="toggleAudio" icon="fa-solid fa-circle-pause" size="2xl" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

const audioPlayer = ref(null)
const showAudioButton = ref(true)

const toggleAudio = () => {
    showAudioButton.value = !showAudioButton.value

    if (!showAudioButton.value) {
        playAudio()
    } else {
        pauseAudio()
    }
}

const playAudio = () => {
    audioPlayer.value.play()
}

const pauseAudio = () => {
    audioPlayer.value.pause()
}

onMounted(() => {
    playAudio()

    setTimeout(() => {
        if (!audioPlayer.value.paused) {
            showAudioButton.value = false
        }
    }, 500);

})
</script>