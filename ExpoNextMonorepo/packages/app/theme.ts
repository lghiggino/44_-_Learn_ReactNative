// https://www.dripsy.xyz/usage/theming/create
// and
// https://theme-ui.com/theming/
import { makeTheme } from 'dripsy'

const theme = makeTheme({
  breakpoints:[
    '480px', '768px', '1024px', '1200px', '1920px'
  ],
  colors: {
    $text: '#000',
    $background: '#f1f1f1',
    $primary: '#07c',
    $secondary: '#0011cc',
    $accent: '#77cc00',
    $highlight: '#cc0077',
    $muted: '#f5f5f5'
  },
  space: {
    // recommended: set 0 first, then double for consistent nested spacing
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    h1: {
      fontSize: '$2', // 16px, from `fontSizes` above
    },
    p: {
      fontSize: '$0', // 12px from `fontSizes`
      mb: '$3', // 8px from `space`
    },
  },
})

type MyTheme = typeof theme

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme }
