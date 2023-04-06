<template>
    <div class="countdown col-10 mx-auto position-relative mb-3 rounded-3 text-center pb-2">
        <div class="countdown-wrapper flex row mx-auto w-100">
            <div id="js-days" class="number col-3"></div>
            <div id="js-hours" class="number col-3"></div>
            <div id="js-minutes" class="number col-3"></div>
            <div id="js-seconds" class="number col-3"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let interval = null

const daysBetween = (date1, date2) => {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms

    // Convert back to days and return
    return Math.round(difference_ms / one_day)
}

const secondsDifference = (date1, date2) => {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()
    var difference_ms = date2_ms - date1_ms
    var difference = difference_ms / one_day
    var offset = difference - Math.floor(difference)
    return offset * (60 * 60 * 24)
}

const startCountdown = () => {
    displayValue('#js-days', window.days)
    displayValue('#js-hours', window.hours)
    displayValue('#js-minutes', window.minutes)
    displayValue('#js-seconds', window.seconds)

    interval = setInterval(() => {
        if (window.seconds > 0) {
            window.seconds--
            displayValue('#js-seconds', window.seconds)
        } else {
            // Seconds is zero - check the minutes
            if (window.minutes > 0) {
                window.minutes--
                window.seconds = 59
                updateValues('minutes')
            } else {
                // Minutes is zero, check the hours
                if (window.hours > 0) {
                    window.hours--
                    window.minutes = 59
                    window.seconds = 59
                    updateValues('hours')
                } else {
                    // Hours is zero
                    window.days--
                    window.hours = 23
                    window.minutes = 59
                    window.seconds = 59
                    updateValues('days')
                }
            }
        }

        if (window.seconds == 0 && window.minutes == 0 && window.hours == 0 && window.days == 0) {
            clearInterval(interval)
        }
    }, 1000)
}

const updateValues = context => {
    if (context === 'days') {
        displayValue('#js-days', window.days)
        displayValue('#js-hours', window.hours)
        displayValue('#js-minutes', window.minutes)
        displayValue('#js-seconds', window.seconds)
    } else if (context === 'hours') {
        displayValue('#js-hours', window.hours)
        displayValue('#js-minutes', window.minutes)
        displayValue('#js-seconds', window.seconds)
    } else if (context === 'minutes') {
        displayValue('#js-minutes', window.minutes)
        displayValue('#js-seconds', window.seconds)
    }
}

const displayValue = (target, value) => {
    let newDigit = document.createElement('span')
    let targetElement = document.querySelector(target)

    newDigit.innerText = pad(value)
    newDigit.classList.add('new')
    targetElement.insertBefore(newDigit, targetElement.firstChild)

    if (targetElement.childElementCount > 1) {
        if (targetElement.children[0].classList.contains('current')) {
            targetElement.children[0].classList.add('old')
            targetElement.children[0].classList.remove('current')
        }

        if (targetElement.children[1].classList.contains('current')) {
            targetElement.children[1].classList.add('old')
            targetElement.children[1].classList.remove('current')
        }
    }

    setTimeout(() => {
        if (targetElement.childElementCount > 1) {
            if (targetElement.children[1].classList.contains('old')) {
                targetElement.children[1].remove()
            }
        }

        if (targetElement.children[0].classList.contains('new')) {
            targetElement.children[0].classList.add('current')
            targetElement.children[0].classList.remove('new')
        }
    }, 900)
}

const pad = number => {
    return ("0" + number).slice(-2)
}

onMounted(() => {
    let targetDate = new Date("2023-05-06T03:00:00Z")
    let now = new Date()
    // console.log(targetDate)

    window.days = daysBetween(now, targetDate)
    let secondsLeft = secondsDifference(now, targetDate)
    window.hours = Math.floor(secondsLeft / 60 / 60)
    secondsLeft = secondsLeft - (window.hours * 60 * 60)
    window.minutes = Math.floor(secondsLeft / 60)
    secondsLeft = secondsLeft - (window.minutes * 60)
    window.seconds = Math.floor(secondsLeft)

    startCountdown()
})

onUnmounted(() => {
    clearInterval(interval)
})

</script>

<style lang="scss">
.countdown {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #FCF9F2;
    box-shadow: 0px 0px 10px 0px #E2DFDE;

    .countdown-wrapper {
        transform-style: preserve3d;
        perspective: 500px;
        height: 5rem;
        width: 20em;

        .number {
            display: block;
            color: #333;
            height: 100%;
            font-size: 2.5rem;
            position: relative;
            text-align: center;

            .current {
                color: #675b58;
                position: absolute;
                border-radius: 1rem;
                height: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }

            .new {
                @extend .current;
                animation: show-new 0.4s cubic-bezier(0, 0.9, 0.5, 1.2) forwards;
            }

            .old {
                @extend .current;
                animation: hide-old 2s cubic-bezier(0, 0.9, 0.56, 1.2) forwards;
            }
        }

        @mixin countdown-digit($content) {
            content: $content;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            bottom: 0;
            font-size: 12px;
            color: #675b58;
        }

        #js-days:after {
            @include countdown-digit($content: 'HARI');
        }

        #js-hours:after {
            @include countdown-digit($content: 'JAM');
        }

        #js-minutes:after {
            @include countdown-digit($content: 'MINIT');
        }

        #js-seconds:after {
            @include countdown-digit($content: 'SAAT');
        }
    }
}

@keyframes hide-countdown {
    to {
        height: 0;
        overflow: hidden;
    }
}

@keyframes show-new {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) translateY(-2rem) scale(0.8) rotateX(-20deg);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

@keyframes hide-old {
    0% {
        transform: translate(-50%, -50%);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -45%) translateY(-5rem) scale(0.5) rotateX(-75deg);
    }
}
</style>