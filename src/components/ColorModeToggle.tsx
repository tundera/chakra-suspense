import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      display='flex'
      height='8'
      width='8'
      alignItems='center'
      justifyContent='center'
      rounded='lg'
      aria-label='Toggle Dark Mode'
      onClick={toggleColorMode}
    >
      {colorMode === 'dark' ? (
        <Icon as={FiSun} height='4' width='4' title='Light Mode Icon' />
      ) : (
        <Icon as={FiMoon} height='4' width='4' title='Dark Mode Icon' />
      )}
    </Button>
  )
}

export default ColorModeToggle
