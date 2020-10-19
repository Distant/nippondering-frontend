import { ReactNode, FunctionComponent } from 'react'
import { Box } from '@chakra-ui/core'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <Box className="background-pattern">
      <Box className="background-pattern-gradient" />
      <Box mx="auto" py={{ base: 4, md: 8 }} px={{ base: 2, md: 5 }} maxW="1200px">{children}</Box>
    </Box>
  )
}

export default Container
