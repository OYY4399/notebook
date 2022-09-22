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
    {
      text: 'CSS预处理器',
      collapsible: true,
      children: [
        '/notebook/less.md',
        '/notebook/scss.md'
      ]
    },
  ]
}
