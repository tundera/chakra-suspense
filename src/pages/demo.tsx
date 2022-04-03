import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

import DynamicShadowImage from 'src/components/DynamicShadowImage'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt: 'Content 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt: 'Content 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1636391705361-810a90ac0177?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2338&q=80',
    alt: 'Content 3',
  },
]

const Demo: NextPage = () => {
  return (
    <Container as='main' minW='full' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Head>
        <title>Chakra UI + Next.js | Demo</title>
        <meta name='description' content='Starter template for Chakra UI + Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Stack
        spacing='8'
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg='gray.800'
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'xl') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack direction='column' padding={24} spacing={32}>
          {images.map(({ src, alt }) => (
            <DynamicShadowImage src={src} alt={alt} key={src} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Demo
