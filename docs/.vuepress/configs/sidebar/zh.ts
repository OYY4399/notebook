import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/notebook/': [
    {
      text: 'Markdown',
      collapsible: true,
      children: [
        '/notebook/markdown.md'
      ]
    },
  ]
}
