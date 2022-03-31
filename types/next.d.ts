import type { NextComponentType, NextPageContext } from 'next'
import type { Router } from 'next/router'
import type { Session } from 'next-auth'

import type { GetLayoutFunction } from 'src/lib/types'

type NextPageWithLayout<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  getLayout?: GetLayoutFunction<P>
}

declare module 'next/app' {
  type AppProps<P = Record<string, unknown>> = {
    Component: NextPageWithLayout<P, any>
    router: Router
    __N_SSG?: boolean
    __N_SSP?: boolean
    pageProps: P & {
      /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
      session?: Session
    }
  }
}
