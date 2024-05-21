<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import DocBefore from './components/DocBefore.vue';
import { ElBacktop } from 'element-plus'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      My sidebar top content
    </template> -->
    <!-- 使用插槽修改主题 -->
    <template #doc-before>
      <DocBefore></DocBefore>
    </template>
  </Layout>
  <!-- 回到顶部 -->
  <el-backtop :right="60" :bottom="75" />
</template>

<style>
.el-backtop__icon {
  color: #359C60;
}
</style>