import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react'
import type { FallbackProps } from 'react-error-boundary'

export default function RootErrorFallback({ error }: FallbackProps) {
  return (
    <Flex minHeight='100vh' width='full' direction='column' align='center' justify='center'>
      <Heading as='h2' fontSize='xl' fontWeight='bold'>
        Page failed to load! See Error below for details.
      </Heading>
      <Box>
        <Code>{error.message}</Code>
      </Box>
      <Box py='2'>
        <Text fontSize='lg'>Please try again later.</Text>
      </Box>
    </Flex>
  )
}
