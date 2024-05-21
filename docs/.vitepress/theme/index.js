import DefaultTheme from 'vitepress/theme'
// 全局引入elementPlus样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import MyLayout from './MyLayout.vue'
import './custom.css'
// 修改主题
export default {
    extends: DefaultTheme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: MyLayout
}