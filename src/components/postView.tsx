import Link from 'next/link'
import BlogPostPreviewType from '../types/blogPostPreview'
import { Box, Heading, Text, Button, Avatar, Flex, Divider } from '@chakra-ui/core'
import { shadows, ctaButtonProps } from './commonProps'
import ReactMarkdown from 'react-markdown'
import { BlogCategoryLink } from './blogCategoryLink'
import BlogPostFull from '../types/blogPostFull'

type Props = {
  post: BlogPostPreviewType | BlogPostFull
  preview?: boolean
}

const PostView = ({ post, preview }: Props) => {
  return (
    <Box position="relative" mb={12}>
      <Box className="rounded4" borderTop="4px solid" borderTopColor="purple.500" width="100%" maxHeight={preview ? { base: "400px", md: "600px" } : "-1"} background="white" {...shadows[preview ? 3 : 3]} position="relative" px={2} py={8}>
        <Heading textStyle="sectionTitlePlain" textAlign="left" p={0} pb={2} width="auto">{post.title}</Heading>
        <Flex align="center" mx={8}>
          <Avatar src={`/assets/${post.owner.toLowerCase()}.jpg`} w="48px" h="48px" mr={2} p="2px" backgroundColor="#ffb379"></Avatar>
          <Text flexGrow={1}>{"By " + post.owner}</Text>
          <Text textAlign="right">{"Posted " + new Date(post.published!).toDateString()}</Text>
        </Flex>
        <Flex justifyContent="flex-end" mx={8}>{post.tags && post.tags.map(
          (tag) => <BlogCategoryLink
            key={tag}
            category={tag}
            label={tag.toUpperCase()[0] + tag.substring(1)}
            alignRight
          />
        )}</Flex>
        <Divider my={2} color="#DDE" />
        <Box mx={8} textStyle="blogPost">
          <ReactMarkdown source={post.content} escapeHtml={false} disallowedTypes={preview ? ["image", "link"] : []} />
        </Box>
        {preview ?
          <Box
            background="linear-gradient(rgba(255, 255, 255, 0) 5.13%, rgb(255, 255, 255) 60.13%, rgb(255, 255, 255) 100%)"
            position="absolute"
            bottom={0}
            width="100%"
            left={0}
            p={8}
            height={20}>
          </Box> : null}
      </Box>
      {preview && <Link href={`/blog/${post.slug}-${post.postId}`}>
        <Button {...ctaButtonProps} width="10em" position="absolute" bottom={-5} left="calc(50% - 80px)">Read More</Button>
      </Link>}
    </Box>
  )
}

export default PostView
