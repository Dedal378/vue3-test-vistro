<script setup>
import { computed, ref, onBeforeUnmount } from 'vue'

let timerInterval = null
const isRunning = ref(false)
const displayHours = ref(0)
const displayMinutes = ref(0)
const displaySeconds = ref(0)

const _seconds = computed(() => 1000)
const _minutes = computed(() => _seconds.value * 60)
const _hours = computed(() => _minutes.value * 60)
const _days = computed(() => _hours.value * 24)

const togglePush = () => isRunning.value = !isRunning.value
const formatNum = (num) => num < 10 ? '0' + num : num
const timerPause = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
    togglePush()
    console.log('pause', timerInterval)
  }
}
const timerStop = () => {
  clearInterval(timerInterval)
  timerInterval = null
  isRunning.value = false
  displayHours.value = 0
  displayMinutes.value = 0
  displaySeconds.value = 0
}
const timerStart = () => {
  togglePush()
  const end = new Date()

  timerInterval =  setInterval(() => {
    const now = new Date()
    const diff = now.getTime() - end.getTime()
    console.log(diff)
    if (diff < 0) clearInterval(timerInterval)

    const hours = Math.floor((diff % _days.value) / _hours.value)
    const minutes = Math.floor((diff % _hours.value) / _minutes.value)
    const seconds = Math.floor((diff % _minutes.value) / _seconds.value)
    displayHours.value = formatNum(hours)
    displayMinutes.value = formatNum(minutes)
    displaySeconds.value = formatNum(seconds)
  }, 1000)
}

onBeforeUnmount(clearInterval(timerInterval))
</script>

<template>
  <div :class="isRunning ? 'block-counter block-counter_start' : 'block-counter'">
    <div class="top">
      <div v-if="!displaySeconds">
        <span>{{ displayHours }}:</span>
        <span>{{ displayMinutes }}:</span>
        <span>{{ displaySeconds }}</span>
      </div>
      <div v-else>
        <span v-show="displayHours > 0">{{ displayHours }}:</span>
        <span v-show="displayMinutes > 0">{{ displayMinutes }}:</span>
        <span v-show="displaySeconds > 0">{{ displaySeconds }}</span>
      </div>
    </div>

    <div class="bottom">
      <span
        v-show="!isRunning"
        @click="timerStart"
        class="i-custom:play icon"
      ></span>
      <span
        v-show="isRunning"
        @click="timerPause"
        class="i-custom:pause icon"
      ></span>
      <span
        @click="timerStop"
        class="i-custom:stop icon"
      ></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-counter {
  color: var(--color-text-counter);

  & > .top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid var(--color-text-counter);
  }

  & > .bottom {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
  }
}

.block-counter_start {
  color: var(--color-text);

  & > .top {
    border-bottom: 1px solid var(--color-text);
  }
}
</style>
