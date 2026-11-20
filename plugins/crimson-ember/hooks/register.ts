import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// 深血红的底，玫红火焰作强调，琥珀色取自眼睛；浅色模式是带点血色的旧纸。
const { theme, problems } = makeColors({
  label: 'Crimson Ember',
  roles: { accent: '#d4405f', danger: '#e5533a', success: '#6f9a5a', warning: '#e0913a', pro: '#a15ba8' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f1e2e1',
        'surface-1': '#f6ebea',
        'surface-2': '#fbf5f4',
        'text-primary': '#2a0d10',
        'text-secondary': '#5a2f33',
        'text-muted': '#72464a',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1c0306',
        'surface-1': '#26060a',
        'surface-2': '#30090e',
        'surface-3': '#380c12',
        'text-primary': '#f6e9e8',
        'text-secondary': '#dcc3c3',
        'text-muted': '#b8999a',
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(`Crimson Ember 未绘制：${set.reason}`)
    }

    return next(e)
  })
}
