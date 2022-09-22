import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarZh: NavbarConfig = [
  {
    text: '笔记',
    children: [
      {
        text: 'Markdown',
        children: [
          '/notebook/markdown.md'
        ]
      },
      {
        text: 'CSS预处理器',
        children: [
          '/notebook/less.md',
          '/notebook/scss.md'
        ]
      },
    ]
  },
]
