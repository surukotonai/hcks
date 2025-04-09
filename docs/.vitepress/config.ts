import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/', 
  title: 'My Docs',
  description: 'VitePress のサンプル',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/' },
            { text: '導入手順', link: '/guide/getting-started' }
          ]
        }
      ]
    }
  }
})
