import { GlobalStyles, mode } from '@chakra-ui/theme-tools'

const styles: GlobalStyles = {
  global: (props) => ({
    html: {
      minWidth: '360px',
      scrollBehavior: 'smooth',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: mode('white', 'black')(props),
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'base',
      color: mode('black', 'white')(props),
      backgroundColor: mode('white', 'black')(props),
    },
  }),
}

export default styles
