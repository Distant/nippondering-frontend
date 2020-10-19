import Link from 'next/link'
import { Box, Image } from '@chakra-ui/core'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Box
      w="200px"
      h="200px"
      mx="auto"
      backgroundImage={"url("+src+")"}
      backgroundPosition="center"
      position="absolute"
      right={-8}
      top={-8}
      boxShadow="0 4px 14px 0 rgba(70,70,70,0.39)"
      rounded="4px"
    //0 6px 20px rgba(0,118,255,0.23)
    />
  )
  return (
    <Box mx={{ base: 5, sm: 0 }}>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
          image
        )}
    </Box>
  )
}

export default CoverImage
