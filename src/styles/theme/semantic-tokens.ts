import type { ChakraTheme } from '@chakra-ui/react'

type SemanticTokens = ChakraTheme['semanticTokens']

const tokens: SemanticTokens = {
  colors: {
    background: {
      default: 'white',
      _dark: 'black',
    },
    surface: {
      default: 'white',
      _dark: 'blackAlpha.900',
    },
  },
}

export default tokens
