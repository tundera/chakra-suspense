import type { ChakraTheme } from '@chakra-ui/react'

type SemanticTokens = ChakraTheme['semanticTokens']

const tokens: SemanticTokens = {
  colors: {
    background: {
      default: 'white',
      _dark: 'black',
    },
  },
}

export default tokens
