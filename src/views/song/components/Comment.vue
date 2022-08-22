<script setup lang="ts">
import { usePlaylistStore } from '@/store/playlist'
import { getSongComment } from '@/service/song'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import type { Comment } from '@/service/type'

const playlistStore = usePlaylistStore()
const { currentSong } = storeToRefs(playlistStore)

const commentTotal = ref(0),
  commentList = ref<Comment[]>([])

const currentPage = ref(1)

// 设置评论
const setSongComment = async (page: number) => {
  const res = await getSongComment(currentSong.value.id, 20, (page - 1)*20)
  commentTotal.value = res.total
  commentList.value = res.comments
}

// 初始化评论
setSongComment(1)

// 切换页数, 更新评论
const currentChange = () => setSongComment(currentPage.value)

// 监听歌曲切换, 更新评论
watch([() => playlistStore.playIndex, () => playlistStore.playlistId], () => {
  setSongComment(1)
  currentPage.value = 1
})
</script>

<template>
  <div class="song-comment">
    <h3>全部评论({{ commentTotal }})</h3>
    <div class="comment" v-for="item in commentList" :key="item.commentId">
      <el-image :src="item.user.avatarUrl"></el-image>
      <div class="comment-content">
        <p class="content">
          <a href="javascript:;">{{ item.user.nickname }}：</a>
          {{ item.content }}
        </p>
        <p class="reply" v-if="item.beReplied.length > 0">
          <a href="javascript:;">@{{ item.beReplied[0].user.nickname }}：</a>
          {{ item.beReplied[0].content }}
        </p>
        <div class="info">
          <span>{{ item.timeStr }}</span>
        </div>
      </div>
    </div>
    <el-pagination 
      background 
      layout="prev, pager, next" 
      page-size="20" 
      :total="commentTotal"
      v-model:current-page="currentPage"
      @current-change="currentChange"
      @prev-click="currentChange"
      @next-click="currentChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.song-comment {
  width: 600px;
  margin: auto;
  padding: 0 0 60px;
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
  .comment {
    @include basicFlexBox($alignItems: flex-start);
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #e8e8e8;
    &:last-child {
      border-bottom: 0;
    }
    .el-image {
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }
    .comment-content {
      width: 550px;
      p {
        margin: 0;
        font-size: 14px;
        line-height: 18px;
        a {
          color: $linkColor;
        }
      }
      .reply {
        margin-top: 10px;
        padding: 8px;
        background-color: #e6e6e6;
        border-radius: 6px;
        color: #686868;
      }
      .info {
        @include basicFlexBox();
        margin-top: 10px;
        color: #868686;
        font-size: 12px;
      }
    }
  }
  .el-pagination {
    margin: 20px 0 50px;
    justify-content: center;
  }
}
</style>