<script setup lang="ts">
import { ref, inject } from 'vue'

const setPlayRate = inject('setPlayRate') as (val: number) => void

const speedList = ref([
  { speed: '2.0x', selected: false }, 
  { speed: '1.75x', selected: false },
  { speed: '1.5x', selected: false },
  { speed: '1.0x', selected: true },
  { speed: '0.75x', selected: false },
  { speed: '0.5x', selected: false },
])
const selected = ref('1.0x')

function speedSelect(speed: string) {
  speedList.value.forEach(item => {
    item.selected = false
    if (item.speed === speed) {
      item.selected = true
      selected.value = speed
      setPlayRate(parseFloat(item.speed))
    }
  })
  
}
</script>

<template>
  <div class="video-control-speed">
    <div class="speed-title">
      {{ selected === '1.0x' ? '倍率' : selected }}
    </div>
    <ul class="speed-detail">
      <li
        class="speed-detail-item"
        v-for="item in speedList"
        :key="item.speed"
        :class="item.selected ? 'is-active' : ''"
        @click="speedSelect(item.speed)"
      >{{ item.speed }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.video-control-speed {
  position: relative;
  .speed-title {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .speed-detail {
    display: none;
    list-style: none;
    position: absolute;
    bottom: 30px;
    left: 50%;
    z-index: 999;
    transform: translateX(-50%);
    margin: 0;
    padding: 8px 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    &::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 100%;
    }
    .speed-detail-item {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      transition: background-color 0.3s;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .is-active {
      color: $themeColor;
    }
  }
  &:hover {
    .speed-detail {
      display: block;
    }
  }
  
}
</style>