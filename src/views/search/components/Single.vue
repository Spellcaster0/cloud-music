<script setup lang="ts">
import { timeFormatter } from '@/utils/format'
import type { SearchResult, SearchSong } from '@/service/type'
import { usePlaylistStore } from '@/store/playlist'

const playlistStore = usePlaylistStore()

const props = defineProps<{
  data: SearchResult
}>()

// 索引方法
const indexMethod = (index: number) => {
  return index + 1 >= 10 ? index + 1 : '0' + (index + 1)
}

// 把行索引放在row中
const tableRowClassName = ({ row, rowIndex }: {row: SearchSong, rowIndex: number}) => {
  row.index = rowIndex
}
// 双击播放
const playSong = (row: SearchSong) => {
  playlistStore.$patch({
    playing: true
  })
  playlistStore.insertSong(row)
}
</script>

<template>
  <el-table
    ref="songTable"
    class="search-single"
    :data="data.songs" 
    stripe
    highlight-current-row
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-dblclick="playSong"
  >
    <el-table-column type="index" :index="indexMethod" />
    <el-table-column label="操作" width="80">
      <template>
        <svg-icon icon="download" size="20" color="red" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="音乐标题"/>
    <el-table-column label="歌手" >
      <template #default="scope">
        <span v-for="item in scope.row.artists.slice(0, -1)" :key="item.id">
          <span>{{ item.name }}</span> / 
        </span>
        <span>{{ scope.row.artists.at(-1).name }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="album.name" label="专辑" />
    <el-table-column label="时间" width="80" >
      <template #default="scope">
        {{ timeFormatter(scope.row.duration) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.search-single {
  :deep(.cell) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>