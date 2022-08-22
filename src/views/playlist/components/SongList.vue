<template>
  <el-table
    ref="songTable"
    class="song-list"
    :data="shawSongList" 
    stripe
    highlight-current-row
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-dblclick="playSong"
  >
    <el-table-column type="index" :index="indexMethod" />
    <el-table-column label="操作" width="80">
      <template #default="scope">
        <svg-icon icon="download" size="20" color="red" @click="handleClick(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="标题"/>
    <el-table-column label="歌手" >
      <template #default="scope">
        <span v-for="item in scope.row.ar.slice(0, -1)" :key="item.id">
          <span>{{ item.name }}</span> / 
        </span>
        <span>{{ scope.row.ar.at(-1).name }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="al.name" label="专辑" />
    <el-table-column label="时间" width="80" >
      <template #default="scope">
        {{ timeFormatter(scope.row.dt) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
// import { ElLoading } from 'element-plus'
import { getPlaylistApi } from '@/service/playlist'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import type { Song } from '@/service/type'
import { timeFormatter } from '@/utils/format'
import { usePlaylistStore } from '@/store/playlist'

// const songTable = ref<any>(null)

const route = useRoute()
const playlistStore = usePlaylistStore()

// 歌曲列表
let songList: Song[]
// 展示的歌曲列表
const shawSongList = ref<Song[]>([])

// 索引方法
const indexMethod = (index: number) => {
  return index + 1 >= 10 ? index + 1 : '0' + (index + 1)
}

const handleClick = (row: Song) => {
  console.log(row) 
}

// 把行索引放在row中
const tableRowClassName = ({ row, rowIndex }: {row: Song, rowIndex: number}) => {
  row.index = rowIndex
}
// 双击播放
const playSong = (row: Song) => {
  playlistStore.$patch({
    playlist: shawSongList.value,
    playIndex: row.index,
    playlistId: parseInt(route.query.id as string),
    playing: true
  })
}

// onMounted(() => {
//   const loading = ElLoading.service({
//     target: songTable.value,
//     fullscreen: false,
//     text: '加载中...'
//   })
// })

const getPlaylist = () => {
  getPlaylistApi(parseInt(route.query.id as string)).then(res => {
    songList = res.songs
    shawSongList.value = res.songs
    // loading.close()
  })
}
getPlaylist()

watch(() => route.query.id, () => getPlaylist())

</script>

<style lang="scss" scoped>
.song-list {
  :deep(.cell) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>