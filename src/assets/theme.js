import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '67em',
  md: '70em',
  lg: '64em',
  xl: '80em',
}

const Theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
})

export default Theme