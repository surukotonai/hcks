import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'VitePress のサンプル',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/guide/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/guide/' },
            { text: '導入手順', link: '/guide/getting-started' }
          ]
        }
      ]
    }
  }
})
