import { Box, Image } from '@chakra-ui/react'

import NextImage from 'src/components/Image'

type Props = {
  src: string
  alt: string
}

const DynamicShadowImage = ({ src, alt }: Props) => {
  return (
    <Box position='relative'>
      <NextImage
        src={src}
        alt={alt}
        width={320}
        height={320}
        rounded='lg'
        position='absolute'
        objectFit='cover'
        inset={0}
        filter='blur(16px)'
        zIndex={0}
        transform='scale(1.1, 1.1)'
      />

      <NextImage
        src={src}
        alt={alt}
        width={320}
        height={320}
        rounded='lg'
        position='relative'
        objectFit='cover'
        zIndex={10}
      />
    </Box>
  )
}

export default DynamicShadowImage
