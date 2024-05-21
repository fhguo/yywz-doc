import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "优医问诊前端笔记",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/yywz-doc/favicon.ico' }]], 
  base: '/yywz-doc/', // 使用相对路径，相对于服务器根路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/问诊.png', width: 24, height: 24 },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/note/1-vue3基础' }
    ],

    search: {
      provider: 'local', // 可以开启本地搜索
    },

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '1-vue3基础', link: '/note/1-vue3基础' },
          { text: '2-typescript基础', link: '/note/2-typescript基础' },
          { text: '3-pinia基础', link: '/note/3-pinia基础' },
          { text: '4-问诊-项目起步', link: '/note/4-问诊-项目起步' },
          { text: '5-问诊-登录', link: '/note/5-问诊-登录' },
          { text: '6-问诊-用户', link: '/note/6-问诊-用户' },
          { text: '7-问诊-首页', link: '/note/7-问诊-首页' },
          { text: '8-问诊-极速问诊', link: '/note/8-问诊-极速问诊' },
          { text: '9-问诊-问诊室', link: '/note/9-问诊-问诊室' },
          { text: '10-问诊-问诊订单', link: '/note/10-问诊-问诊订单' },
          { text: '11-问诊-药品订单', link: '/note/11-问诊-药品订单' },
          { text: '12-问诊-项目部署', link: '/note/12-问诊-项目部署' },
          { text: 'Vue Examples', link: '/vue-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhguo/yywz-doc.git' }
    ]
  }
})
