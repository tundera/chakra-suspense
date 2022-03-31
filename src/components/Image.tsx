import { Box, chakra } from '@chakra-ui/react'
import NextImage from 'next/image'
import type { ComponentProps } from 'react'

import { bufferToBase64, createShimmer } from 'src/utils/images'

type ImageProps = ComponentProps<typeof ChakraImage> & { shimmer?: boolean }

const ChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader'].includes(
      prop,
    ),
})

const Image = (props: ImageProps) => {
  const {
    src,
    alt,
    loader,
    width,
    height,
    quality,
    placeholder,
    blurDataURL,
    shimmer,
    css,
    ...rest
  } = props
  return (
    <Box cursor='pointer'>
      <ChakraImage
        loader={loader}
        width={width}
        quality={quality}
        height={height}
        placeholder={shimmer ? 'blur' : placeholder}
        blurDataURL={
          shimmer
            ? `data:image/svg+xml;base64,${bufferToBase64(createShimmer({ width, height }))}`
            : blurDataURL
        }
        src={src}
        alt={alt}
        transition='all 0.2s'
        _groupHover={{
          transform: 'scale(1.05)',
        }}
        {...rest}
      />
    </Box>
  )
}

export default Image
