<template>
  <el-table
    ref="songTable"
    class="song-list"
    :data="shawSongList" 
    stripe 
    style="width: 100%"
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
import { ref, onMounted } from 'vue'
import type { Song } from '@/service/type'
import { timeFormatter } from '@/utils/format'

// const songTable = ref<any>(null)

const route = useRoute()

// 歌曲列表
let songList: Song[]
// 展示的歌曲列表
const shawSongList = ref<Song[]>([])

// 索引方法
const indexMethod = (index: number) => {
  return index + 1 >= 10 ? index + 1 : index + 1 + '0'
}

const handleClick = (row: Song) => {
  console.log(row) 
}

// onMounted(() => {
//   const loading = ElLoading.service({
//     target: songTable.value,
//     fullscreen: false,
//     text: '加载中...'
//   })
// })

getPlaylistApi(parseInt(route.query.id as string)).then(res => {
  songList = res.songs
  shawSongList.value = res.songs
  // loading.close()
})

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