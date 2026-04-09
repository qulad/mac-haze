import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'mac-haze',
  description: 'Play Windows-only Steam games on macOS via SteamCMD + Wine',
  base: '/mac-haze/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Roadmap', link: '/roadmap' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Roadmap', link: '/roadmap' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qulad/mac-haze' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 qulad',
    },
  },
})
