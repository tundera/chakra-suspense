import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
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

import { Logo } from 'src/components/Logo'
import { OAuthButtonGroup } from 'src/components/OAuthButtonGroup'
import { PasswordField } from 'src/components/PasswordField'

const Home: NextPage = () => {
  return (
    <Container as='main' maxW='lg' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Head>
        <title>Chakra UI + Next.js | Home</title>
        <meta name='description' content='Starter template for Chakra UI + Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Stack
        spacing='8'
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: 'surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'xl') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading as='h1' size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>{"Don't have an account?"}</Text>
              <Button variant='link' colorScheme='blue'>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box>
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button variant='primary'>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
