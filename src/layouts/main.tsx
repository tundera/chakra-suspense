import { Box, Flex, Container } from '@chakra-ui/react'
import { lazy, type ReactNode } from 'react'

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
            <Container
              as='main'
              maxW='lg'
              py={{ base: '12', md: '24' }}
              px={{ base: '0', sm: '8' }}
            >
              {children}
            </Container>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Box>
  )
}

export const getLayout: GetLayoutFunction = (page) => {
  const Layout = lazy(() => import('src/layouts/main'))

  return <Layout>{page}</Layout>
}
