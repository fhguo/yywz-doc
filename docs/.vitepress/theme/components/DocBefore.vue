<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const pageId = computed(() => route.path.replace('/vite-doc', ''))
console.log('pageId', pageId.value);

</script>

<template>
  <div class="copyright">
    <!-- :src="`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${pageId}`" -->
    <div>
      <!-- 引入三方页面浏览量接口 -->
      <!-- gfhdoc: 自定义的项目名称，不能重复；pageId: 每个页面唯一的标识 -->
      <img class="visitor" :src="`https://visitor-badge.laobi.icu/badge?page_id=ylwzdoc.${pageId}&left_text=浏%20览%20量%20`" title="当前页面累计访问数"
        />
    </div>
  </div>
</template>

<style scoped lang="less">
.copyright {
  margin-bottom: 20px;
  // border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);
  display: flex;
  // justify-content: center;
  >div {
    display: flex;
  }
}

.visitor {
  margin-right: 8px;
}

@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
