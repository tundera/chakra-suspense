import type { ImageProps as ChakraImageProps } from '@chakra-ui/react'
import type { ImageLoaderProps } from 'next/image'

type ShimmerOptions = Pick<ChakraImageProps, 'width' | 'height'>

export const bufferToBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality}`
}

export const createShimmer = ({ width, height }: ShimmerOptions) => {
  const svg = `
      <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#404040	" offset="20%" />
            <stop stop-color="#303030" offset="50%" />
            <stop stop-color="#404040	" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="#333" />
        <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
      </svg>`
  return svg
}
