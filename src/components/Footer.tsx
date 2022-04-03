import { Box, Flex, Icon, Stack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Link } from 'src/components/Link'

export default function Footer() {
  return (
    <Stack
      as='footer'
      pt='24'
      pb='8'
      spacing='2'
      width='full'
      bgGradient={{ sm: 'linear(to-t, whiteAlpha.900, whiteAlpha.700, transparent)' }}
    >
      <Flex align='center' justify='center' py='2' experimental_spaceX='4'>
        <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`} isExternal>
          <Icon
            as={FaGithub}
            height='6'
            width='6'
            color='gray.500'
            transition='ease-in-out'
            transitionDuration='300ms'
            _hover={{ color: 'gray.800' }}
            _dark={{ color: 'gray.400', _hover: { color: 'gray.200' } }}
          />
        </Link>
        <Link href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`} isExternal>
          <Icon
            as={FaTwitter}
            height='6'
            width='6'
            color='gray.500'
            transition='ease-in-out'
            transitionDuration='300ms'
            _hover={{ color: 'gray.800' }}
            _dark={{ color: 'gray.400', _hover: { color: 'gray.200' } }}
          />
        </Link>
        <Link
          href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`}
          isExternal
        >
          <Icon
            as={FaLinkedin}
            height='6'
            width='6'
            color='gray.500'
            transition='ease-in-out'
            transitionDuration='300ms'
            _hover={{ color: 'gray.800' }}
            _dark={{ color: 'gray.400', _hover: { color: 'gray.200' } }}
          />
        </Link>
      </Flex>
      <Box color='gray.500' fontSize={{ base: 'xs', md: 'sm' }} textAlign='center'>
        Copyright © 2021 {process.env.NEXT_PUBLIC_COPYRIGHT_NAME}. All rights reserved.
      </Box>
    </Stack>
  )
}
