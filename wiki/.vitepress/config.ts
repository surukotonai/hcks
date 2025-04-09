// docs/.vitepress/config.ts

import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/wiki/',
  head: [
    
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://hackserver.shop/assets/output_d747fef3701442e791ef05d65b48704b-uz0s6btr.ico' }]
  ],
  title: 'HackServer Docs',
  
  description: 'test',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: "Wiki", link: "/faq/" },
    ],
    sidebar: {

      '/faq/': [
        {
          text: 'HackServer Wiki',
          items: [

            { text: '概要/よくある質問', link: '/faq/' },
            { text: '導入手順', link: '/guide/' }
          ]
        }
      ]
    }
  }
})
