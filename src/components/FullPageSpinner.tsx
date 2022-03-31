import { Center, Spinner } from '@chakra-ui/react'

type FullPageSpinnerProps = {
  label?: string
}

export default function FullPageSpinner({ label }: FullPageSpinnerProps) {
  return (
    <Center flex='1' flexDirection='column' w='full'>
      <Spinner size='md' label={label} />
    </Center>
  )
}
