<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import Single from './components/Single.vue'
import Singer from './components/Singer.vue'
import Album from './components/Album.vue'
import Video from './components/Video.vue'
import Playlist from './components/Playlist.vue'
import { useRoute } from 'vue-router'
import { ref, watch, shallowRef, computed } from 'vue'
import { getSearchResult } from '@/service/search'

const height = computed(() => {
  return window.innerHeight - 70 - 56
})

const route = useRoute()
const searchResult = ref<Record<string, any>>({})
const setSearchResult = async () => {
  const res = await getSearchResult(route.query.keywords as string)
  searchResult.value = res.result
}
setSearchResult()
watch(() => route.query.keywords, () => setSearchResult())

const menuList = ref([
  {
    name: '单曲',
    index: 'single',
    component: Single
  },
  {
    name: '歌手',
    index: 'singer',
    component: Singer
  },
  {
    name: '专辑',
    index: 'album',
    component: Album
  },
  {
    name: '视频',
    index: 'video',
    component: Video
  },
  {
    name: '歌单',
    index: 'playlist',
    component: Playlist
  }
])

let shawComponent = shallowRef(Single)

const handleSelect = (key: string) => {  
  menuList.value.forEach(item => {
    if (item.index === key) {
      shawComponent.value = item.component
    }
  })
  
}

</script>

<template>
  <el-scrollbar class="search-container" :height="height + 'px'">
    <h3>
      搜索 {{ route.query.keywords }}
    </h3>
    <TabBar
      class="search-menu"
      :menu-list="menuList" 
      :default-active="menuList[0].index"
      :handle-select="handleSelect"
    />
    <template v-if="typeof searchResult.songs !== 'undefined'">
      <component :is="shawComponent" :data="searchResult"></component>
    </template>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.search-container {
  padding: 0 20px;
  box-sizing: border-box;
  h3 {
    margin: 20px 10px;
    letter-spacing: 1px;
  }
  .search-menu {
    margin: 10px 0;
  }
}
</style>