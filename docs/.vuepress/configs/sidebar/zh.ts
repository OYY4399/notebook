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
    {
      text: 'NPM包管理器',
      collapsible: true,
      children: [
        '/notebook/npm.md',
        '/notebook/yarn.md',
        '/notebook/pnpm.md'
      ]
    },
    {
      text: 'Git',
      collapsible: true,
      children: [
        '/notebook/git.md',
      ]
    },
  ]
}
