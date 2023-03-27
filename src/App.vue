<script setup>
import { ref } from 'vue'
import BaseCounter from './components/BaseCounter.vue'
import AddCounter from './components/AddCounter.vue'

const id = ref(1)
let counters = ref([])

const addCounter = () => {
  counters.value.push({ id: id.value++ })
}
</script>

<template>
  <main>
    <BaseCounter
      v-for="counter in counters"
      :key="counter.id"
    />

    <AddCounter @add-counter="addCounter" />
  </main>
</template>

<style lang="scss">
@import './assets/base.css';

#app {
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 72px;
  font-weight: normal;

  @media screen and (max-width: 1023px) {
    padding-left: 135px;
    padding-right: 135px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 45px;
    padding-right: 45px;
  }
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fill, min(225px));
  grid-auto-flow: row dense;
  gap: 45px 50px;
  place-content: center;
}

.block-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 120px;
  background-color: var(--color-background-counter);

  .icon {
    cursor: pointer;
  }

  .icon:hover {
    color: var(--color-text);
  }
}
</style>
