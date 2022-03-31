import { type LinkProps, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

type NavLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href?: string
  onClick?: () => void
  isActive?: boolean
  children: ReactNode
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const MotionLink = motion<LinkProps>(Link)

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { href, onClick, isActive, children },
  ref,
) {
  return (
    <MotionLink
      ref={ref}
      href={href}
      onClick={onClick}
      color='gray.600'
      fontWeight='medium'
      rounded='md'
      px='4'
      py='2'
      fontSize='sm'
      _dark={{ color: 'gray.400' }}
      _active={{ color: 'black', fontWeight: 'semibold', _dark: { color: 'white' } }}
      _hover={{ color: 'black', _dark: { color: 'whiteAlpha.800' } }}
      variants={item}
      exit={{ opacity: 0 }}
    >
      {children}
    </MotionLink>
  )
})

export default NavLink
