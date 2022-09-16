<template>
<el-scrollbar :height="scrollHeight">
  <div class="playlist-container">
    <Detail v-if="playlistDetail?.coverImgUrl" :detail="(playlistDetail as PlaylistDetail)" />

    <div class="menu">
      <tab-bar 
        :menu-list="menuList" 
        :default-active="menuList[0].index"
        @handle-select="handleSelect"
      />
      <el-input v-model="search" placeholder="搜索歌单音乐" :suffix-icon="Search"/>
    </div>
    <component :is="shawComponent"></component>
  </div>
</el-scrollbar>
</template>

<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue'
import Detail from './components/Detail.vue'
import TabBar from '@/components/TabBar/index.vue'
import SongList from './components/SongList.vue'
import Comment from './components/Comment.vue'
import Subscriber from './components/Subscriber.vue'
import { useRoute } from 'vue-router'
import { getPlaylistDetailApi } from '@/service/playlist'
import type { PlaylistDetail } from '@/service/type'
import { numFormatter } from '@/utils/format'
import { Search } from '@element-plus/icons-vue'

const scrollHeight = window.innerHeight - 55 - 36 - 36

const route = useRoute()

let playlistDetail = ref<PlaylistDetail>()

const menuList = ref([
  {
    name: '歌曲列表',
    index: 'songList',
    component: SongList
  },
  {
    name: '评论',
    index: 'comment',
    component: Comment
  },
  {
    name: '收藏者',
    index: 'subscriber',
    component: Subscriber
  }
])

let shawComponent = shallowRef(SongList)

const handleSelect = (key: string) => {  
  menuList.value.forEach(item => {
    if (item.index === key) {
      shawComponent.value = item.component
    }
  })
  
}

let search = ref('')

const getPlaylistDetail = () => {
  getPlaylistDetailApi(parseInt(route.query.id as string)).then(res => {
    playlistDetail.value = res.playlist
    menuList.value[1].name = `评论(${numFormatter(res.playlist.commentCount)})` 
  })
}
getPlaylistDetail()

watch(() => route.query.id, () => {
  getPlaylistDetail()
})

</script>

<style lang="scss" scoped>

.menu {
  @include basicFlexBox();
  margin-top: 18px;
  padding: 0 22px;
  .tab-bar {
    width: 400px;
    :deep(.el-menu-item) {
      font-size: 14px;
    }
    :deep(.is-active) {
      font-size: 16px;
    }
  }
  :deep(.el-input) {
    width: 240px;
    height: 28px;
    .is-focus {
      box-shadow:  0 0 0 1px var(--el-input-hover-border-color) inset;
    }
    .el-input__wrapper {
      border-radius: 20px;
      box-shadow: none;
      background-color: #f7f7f7;
    }
  }
}
</style>