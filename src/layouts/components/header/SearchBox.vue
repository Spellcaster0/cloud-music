<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()

const searchHistory = ref<string[]>([])
searchHistory.value = localCache.getCache('searchHistory') ?? []

// 点击历史记录搜索
const searchClick = (item: string) => {
  appStore.showSearchBox = false
  router.push({ name: 'search', query: { keywords: item } })
}

// 获取searchBox, 点击非盒子区域时, 关闭盒子
const searchBox = ref<HTMLElement>()
onMounted(() => {
  if (searchBox.value instanceof HTMLElement) {
    appStore.searchBox = searchBox.value
  }
})

</script>

<template>
  <div class="search-box" ref="searchBox" >
    <div class="search-history">
      <h3>搜索历史</h3>
      <p v-if="searchHistory.length === 0">
        暂无搜索历史
      </p>
      <div class="history-list">
        <div 
          class="history-item"
          v-for="item in searchHistory"
          :key="item"
          @click="searchClick(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  position: absolute;
  top: 54px;
  left: 40%;
  width: 380px;
  padding: 12px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 10px #82828222;
  z-index: 1000;
  .search-history {
    p {
      margin: auto;
      font-size: 14px;
      color: #868686;
      text-align: center;
    }
    .history-list {
      @include basicFlexBox($justifyContent: flex-start);
      flex-wrap: wrap;
      width: 100%;
      .history-item {
        height: 24px;
        margin: 5px 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 24px;
        color: #868686;
        border: 1px solid #b2b2b2;
        border-radius: 12px;
        cursor: pointer;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
}
</style>