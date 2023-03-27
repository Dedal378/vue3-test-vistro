<script setup>
defineEmits(['add-counter'])
</script>

<template>
  <div class="block-counter add">
    <span
      @click="$emit('add-counter')"
      class="i-custom:add icon"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.block-counter {
  &.add {
    color: var(--color-text-counter);
  }
}
</style>
