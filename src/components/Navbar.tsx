import { Box, Button, chakra, Flex, Icon, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Suspense } from 'react'
import { FiMenu } from 'react-icons/fi'

import ColorModeToggle from 'src/components/ColorModeToggle'
import Image from 'src/components/Image'
import NavLink from 'src/components/NavLink'

const NavLogo = () => (
  <svg viewBox='94 235.04 404 228.96'>
    <path d='M323.7 236.8c-2.2 2.4-2.1 4.4.3 7 2.5 2.7 2.7 9.6.4 17.3-1.7 5.6-12.6 28-14.8 30.2-.7.6-2.8 3.2-4.7 5.7-4.3 5.6-19 21-20 21-.5 0-4.1 2-8.1 4.5-7.5 4.5-21.3 9.3-24.1 8.2-.8-.3-3.2-4.1-5.2-8.4-1.9-4.3-4.2-9-5-10.5-.8-1.4-1.5-3.2-1.5-3.8 0-1.9-8.9-25.2-10.6-27.8-1.6-2.4-4.6-2.9-6.1-1-.6.7-1.3 3.8-1.6 6.8-.7 7.7-11.3 30.6-20.4 44-2.6 3.9-5.2 7.9-5.8 8.8-.5 1-1.3 1.9-1.6 2.2-.3.3-2.5 3.2-4.9 6.5-2.4 3.3-6.4 8.6-8.9 11.7-2.6 3.1-6.2 7.8-8.1 10.3-3.6 4.8-25.3 26.2-32.5 32-2.2 1.8-6 4.4-8.5 5.8-13 7.2-25.1 13.6-29.5 15.7-6 2.8-8.5 4.8-8.5 6.8 0 1.2 1.2 1.4 6.3 1 5.9-.5 13.5-3.8 22.7-9.6 1.4-.9 4.6-2.6 7.2-3.8 2.5-1.2 6.9-3.9 9.8-6.1 5.8-4.3 31-27.2 31-28.2 0-.3 2.1-2.9 4.6-5.6 5.9-6.7 6.2-7 10.3-12.9 3.9-5.7 4-5.8 7.9-10.6 2.8-3.4 8.3-11.2 15.1-21.4 3-4.5 7.9-13.4 16.8-31.1l2.5-4.9 3.9 9.4c4 9.8 13.1 28.7 15.8 32.9.8 1.3 1.6 3 1.7 3.8.1.8 1.4 2.9 2.8 4.8 1.4 1.8 2.6 3.6 2.6 4 0 .7 4.7 7.9 8.8 13.5 3.8 5.1 8.1 8.9 10 9 1.9 0 1.5-1.5-2.5-8-10-16.3-15.3-25.7-15.3-27 0-.6 1-1 2.3-1 9.7 0 28.2-11.4 40.9-25.2 4.7-5.1 9.8-10.5 11.2-11.9 1.4-1.5 2.6-3 2.6-3.3 0-.3 1.5-3 3.3-5.9 4.8-7.7 5.4-8.6 8.8-15.7 1.8-3.6 4.2-9.6 5.4-13.3 2.2-6.8 2.2-6.8 3.8-4.4.9 1.3 5.7 10.9 10.7 21.3 32.1 66.3 40.7 80.7 68.4 113.9 11 13.3 32.1 34.5 43.5 43.7 8.3 6.6 38.3 26.8 40 26.8.6 0 1.1-.8 1.1-1.8s-3.1-3.6-8.1-6.7c-6.7-4.2-18-12.3-19.9-14.5-.3-.3-2.1-1.7-4-3.2-11.5-8.7-39.8-37.6-50.6-51.8-2.7-3.5-5.9-7.6-7.1-9-1.2-1.4-3.4-4.3-4.9-6.5-1.4-2.2-4.3-6.5-6.4-9.5-13.2-19.4-21.8-35.2-38-69.5-6.4-13.5-12.7-26.8-14.9-31.5-2.6-5.6-13.3-23.4-14.5-24.2-1.9-1.3-4.2-.9-5.9 1z' />
  </svg>
)

const MobileMenu = dynamic(() => import('src/components/MobileMenu'), { suspense: true })

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Demo',
    url: '/demo',
  },
]

function Navbar() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <chakra.header
      position='sticky'
      top='0'
      zIndex={20}
      width='full'
      borderBottom='2px'
      borderBottomColor='blackAlpha.500'
      bg='background'
      px='4'
      py='1'
      color='black'
      shadow='sm'
      backdropBlur='md'
      _dark={{
        borderBottomColor: 'whiteAlpha.200',
        bg: 'background',
        color: 'white',
      }}
    >
      <Flex mx='auto' width='full' py='2'>
        {/* desktop nav */}
        <Box
          display={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between' }}
          flex='1 1 auto'
        >
          <Flex as='nav' wrap='nowrap' align='center' justify='center' experimental_spaceX='4'>
            <NextLink href='/'>
              <a>
                <Icon
                  as={NavLogo}
                  display='block'
                  height='12'
                  width='12'
                  fill='current'
                  color='black'
                  transition='ease-in-out'
                  transitionDuration='300ms'
                  _dark={{ color: 'white' }}
                  _active={{ color: 'gray.600', _dark: { color: 'gray.400' } }}
                  _hover={{ color: 'gray.600', _dark: { color: 'gray.400' } }}
                />
              </a>
            </NextLink>
            {links.map((link) => (
              <NextLink key={link.text} href={link.url} passHref>
                <NavLink isActive={router.asPath === link.url}>{link.text}</NavLink>
              </NextLink>
            ))}
          </Flex>
          <Flex flex='none' align='center' justify='space-between' experimental_spaceX='4'>
            {session ? (
              <Flex align='center' experimental_spaceX='2'>
                <Image
                  display='inline-block'
                  src={session.user?.image as string}
                  width={32}
                  height={32}
                  rounded='full'
                  alt={`${session.user?.name ?? 'User'}'s avatar`}
                />
                <Button
                  rounded='lg'
                  px='4'
                  py='2'
                  variant='ghost'
                  fontSize='sm'
                  fontWeight='medium'
                  onClick={() => signOut()}
                  disabled={status !== 'authenticated'}
                >
                  Log out
                </Button>
              </Flex>
            ) : (
              <Button
                rounded='lg'
                px='4'
                py='2'
                fontSize='sm'
                fontWeight='medium'
                variant='ghost'
                onClick={() => signIn()}
                disabled={status === 'loading'}
              >
                Log in
              </Button>
            )}
            <ColorModeToggle />
          </Flex>
        </Box>
        <Box
          display={{ base: 'flex', sm: 'none' }}
          flex={1}
          alignItems='center'
          justifyContent='space-between'
        >
          <NextLink href='/'>
            <a>
              <Icon
                as={NavLogo}
                display='block'
                height='12'
                width='12'
                fill='current'
                color='black'
                transition='ease-in-out'
                transitionDuration='300ms'
                _dark={{ color: 'white' }}
                _active={{ color: 'gray.600', _dark: { color: 'gray.400' } }}
                _hover={{ color: 'gray.600', _dark: { color: 'gray.400' } }}
              />
            </a>
          </NextLink>
          {/* mobile nav menu button*/}
          <Button
            aria-label='Open navigation menu'
            px='2'
            variant='ghost'
            _hover={{ bg: 'gray.100', _dark: { bg: 'whiteAlpha.200' } }}
            _active={{ bg: 'gray.200', _dark: { bg: 'whiteAlpha.300' } }}
            onClick={onOpen}
          >
            <Icon as={FiMenu} width='5' height='5' />
          </Button>
          {/* mobile nav modal*/}
          <Suspense fallback={null}>
            <MobileMenu isOpen={isOpen} onClose={onClose} />
          </Suspense>
        </Box>
      </Flex>
    </chakra.header>
  )
}

export default Navbar
