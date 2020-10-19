import { Box } from '@chakra-ui/core'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Box minH="100vh" >
        <main>{children}</main>
      </Box>
    </>
  )
}

export default Layout
