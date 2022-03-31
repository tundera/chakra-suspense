import { Box, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { type ReactNode } from 'react'

import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import type { GetLayoutFunction } from 'src/lib/types'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box bgGradient={{ sm: 'linear(to-r, blue.600, purple.600)' }}>
      <Flex direction='column' align='center'>
        <Flex direction='column' minHeight='100vh' width='full'>
          <Navbar />
          <Flex flex={1} direction='column' align='center' justify='center'>
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Box>
  )
}

export const getLayout: GetLayoutFunction = (page) => {
  const Layout = dynamic(() => import('src/layouts/main'), { suspense: false })

  return <Layout>{page}</Layout>
}
