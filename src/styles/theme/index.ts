import { type ThemeOverride, extendTheme } from '@chakra-ui/react'

import colors from './colors'
import fonts from './fonts'
import semanticTokens from './semantic-tokens'
import styles from './styles'

export const overrides: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  fonts,
  colors,
  semanticTokens,
}

export const theme = extendTheme(overrides)
