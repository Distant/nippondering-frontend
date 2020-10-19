import { Flex, Box, Image } from "@chakra-ui/core"

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <Flex alignItems="center">
      <Image src={picture} w="12" h="12" m="1" rounded="full" alt={name} />
      <Box fontSize="xl" fontWeight="bold" color="#FFFFFF">{name}</Box>
    </Flex>
  )
}

export default Avatar
