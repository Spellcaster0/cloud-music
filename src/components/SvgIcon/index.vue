<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="{ fontSize: size + 'px', color: color }"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  size?: string
  color?: string
}>()

const iconName = computed((): string => {
  return `#icon-${props.icon}`
})
computed
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  outline: 0;
}
</style>
