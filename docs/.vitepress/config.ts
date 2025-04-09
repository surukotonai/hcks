import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wiki/', 
  title:  'HackServer Docs',
  description: 'test ',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/wiki/' },
      { text: 'Guide', link: '/wiki/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/wiki/guide/' },
            { text: '導入手順', link: '/wiki/guide/getting-started' }
          ]
        }
      ]
    }
  }
})
