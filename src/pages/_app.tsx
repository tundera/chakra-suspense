import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { ErrorBoundary } from 'react-error-boundary'

import FullPageSpinner from 'src/components/FullPageSpinner'
import RootErrorFallback from 'src/components/RootErrorFallback'
import { getLayout as getMainLayout } from 'src/layouts/main'
import { theme } from 'src/styles/theme'

import '@fontsource/inter/variable-full.css'
import '@fontsource/fira-code/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? getMainLayout

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <Suspense fallback={<FullPageSpinner />}>
          <SessionProvider session={pageProps.session}>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </SessionProvider>
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default MyApp
