// docs/.vitepress/config.ts

import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/wiki/',
  head: [
    
    ['link', { rel: 'icon', type: 'image/x-icon', href: '../assets/favicon.ico' }]
  ],
  title: 'HackServer Docs',
  
  description: 'test',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
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
