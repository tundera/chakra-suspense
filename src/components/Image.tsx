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
    inset,
    ...rest
  } = props
  return (
    <Box {...rest}>
      <ChakraImage
        src={src}
        alt={alt}
        loader={loader}
        quality={quality}
        width={width}
        height={height}
        placeholder={shimmer ? 'blur' : placeholder}
        blurDataURL={
          shimmer
            ? `data:image/svg+xml;base64,${bufferToBase64(createShimmer({ width, height }))}`
            : blurDataURL
        }
        {...rest}
      />
    </Box>
  )
}

export default Image
