<template>
  <div class="playlist-detail clearFix">
    <el-image class="fl" :src="detail.coverImgUrl" fit="cover"></el-image>
    <div class="detail-content fl">
      <div class="title">
        <div>歌单</div>
        <h3>{{ detail.name }}</h3>
      </div>
      <div class="author">
        <el-image :src="detail.creator.avatarUrl" fit="cover"></el-image>
        <a href="">{{ detail.creator.nickname }}</a>
        <span>{{ dateFormatter(detail.createTime) }}创建</span>
      </div>
      <div class="menu">
        <el-button round>播放全部</el-button>
        <el-button round>收藏({{ numFormatter(detail.subscribedCount) }})</el-button>
        <el-button round>分享({{ numFormatter(detail.shareCount) }})</el-button>
        <el-button round>下载全部</el-button>
      </div>
      <p class="tag">标签: 
        <span v-for="tag in detail.tags.slice(0, -1)" :key="tag">
          <a href="javascript:;" >{{ tag }}</a>
          /
        </span>
        <a href="javascript:;" >{{ detail.tags.at(-1) }}</a>
      </p>
      <p class="count">
        歌曲: {{ detail.trackCount }}&nbsp;&nbsp;播放量: {{ numFormatter(detail.playCount) }}
      </p>
      <p class="description">简介: {{ detail.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlaylistDetail } from '@/service/type'
import { numFormatter, dateFormatter } from '@/utils/format'

const props = defineProps<{
  detail: PlaylistDetail
}>()

</script>

<style lang="scss" scoped>
.playlist-detail {
  padding: 26px 32px 0;
  .el-image {
    width: 180px;
    border-radius: 5px;
  }
  .detail-content {
    width: calc(100vw - 200px - 260px - 82px);
    margin-left: 20px;
    .title {
      @include basicFlexBox($justifyContent: flex-start);
      div {
        padding: 1px 4px;
        font-size: 14px;
        color: $themeColor;
        border: 1px solid $themeColor;
        border-radius: 2px;
      }
      h3 {
        margin: 0 8px;
        font-size: 20px;
      }
    }
    .author {
      @include basicFlexBox($justifyContent: flex-start);
      margin: 12px 0;
      .el-image {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
      }
      a {
        margin-left: 8px;
        font-size: 12px;
        color: $linkColor;
      }
      span {
        margin-left: 5px;
        font-size: 12px;
        color: #5a5a5a;
      }
    }
    .menu {
      margin-bottom: 18px;
    }
    & > p {
      margin: 6px 0;
      font-size: 14px;
      letter-spacing: 1px;
      color: #5a5a5a;
      &:last-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .tag {
      span {
        font-size: 14px;
      }
      a {
        margin: 2px;
        font-size: 14px;
        color: $linkColor;
      }
    }
  }
}
</style>