import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import BlogPostPreviewType from '../types/blogPostPreview'
import PostView from '../components/postView'
import { Box, Flex, List, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Grid, Heading } from '@chakra-ui/core'
import { FaChevronRight } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { primaryButtonOutline, primaryButtonText } from '../components/commonProps'
import { url } from '../utilities/fetchUtilities'
import Link from 'next/link'
import { BlogCategoryLink } from '../components/blogCategoryLink'
import useSWR from 'swr'
import Container from '../components/container'

type BlogPostList = {
  pageIndex: number
  totalPages: number
  items: BlogPostPreviewType[]
}
export async function getStaticProps() {
  const res = await fetch(url("api/posts/list?pageSize=20"));
  const list: BlogPostList = await res.json()
  const posts = list.items

  return {
    props: {
      posts: posts,
      totalPages: list.totalPages
    },
    revalidate: process.env.NEXTJS_REVALIDATE_SECONDS,
  }
}

type PostTag = {
  tag: string,
  postCount: number
}

const fetchCategories = async (url: string) => {
  const res = await fetch(url)
  const json: PostTag[] = await (res.json())
  return json
}

type Props = {
  posts: BlogPostPreviewType[]
  totalPages: number,
}

const Blog = ({ posts, totalPages }: Props) => {
  const { pageQuery, category } = useRouter().query
  const { data: categories, error: categoriesError } = useSWR<PostTag[], any>(url("api/tags"), fetchCategories, { shouldRetryOnError: false })

  const postTag = categories?.find(t => t.tag == category)
  const postCount = category && postTag ? postTag.postCount : posts.length
  const pages = Math.ceil(postCount / 3)
  const page = Number.parseInt(pageQuery as string)
  const [currentPage, setPage] = useState(page ? Math.max(0, Math.min(pages - 1, page)) : 0)

  useEffect(() => {
    if (category) setPage(0)
  }, [category])

  const PageButtons = (props?: any) => {
    return (
      <Box mb={2} alignSelf="flex-end" {...props}>
        <Button
          {...primaryButtonText}
          aria-disabled={currentPage == 0} disabled={currentPage == 0}
          onClick={() => { window.scrollTo(0, 0); setPage(Math.max(currentPage - 1, 0)) }} mr={2}>Newer</Button>
        <Button
          {...primaryButtonText}
          aria-disabled={currentPage == pages - 1} disabled={currentPage == pages - 1}
          onClick={() => { window.scrollTo(0, 0); setPage(Math.min(currentPage + 1, pages - 1)) }}>Older</Button>
      </Box>
    )
  }

  return (
    <Container>
      <Grid templateColumns={{ base: "100%", md: "1fr 5fr 1fr" }} columnGap={4} maxWidth="1200px" mx="auto" alignItems="flex-start">
        <Box />
        <Box>
          <Breadcrumb alignSelf="flex-start" fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading textStyle="pageTitleBold" mx="auto">Nippondering Blog</Heading>
        </Box>
        <Box />
      </Grid>
      <Grid templateColumns={{ base: "100%", md: "1fr 5fr 1fr" }} columnGap={4} maxWidth="1200px" mx="auto" alignItems="flex-start">
        <Box >
          <Text textStyle="cardTitle" px={6}>Tags</Text>
          <Flex flexDirection={{ base: "row", md: "column" }} flexWrap="wrap" px={4}>
            <BlogCategoryLink label={"All"} />
            {categories && categories.map(
              (tag) => tag.postCount > 0 &&
                <BlogCategoryLink
                  key={tag.tag}
                  category={tag.tag}
                  label={tag.tag.toUpperCase()[0] + tag.tag.substring(1)}
                  selected={tag.tag == category}
                />
            )}
          </Flex>
        </Box>
        <Flex minHeight="90vh" width="100%" direction="column" justifyContent="flex-start" maxWidth="950px" mx="auto">
          <PageButtons />
          {posts && posts
            .filter((post) => {
              return category && categories ? post.tags.some(t => t == category) : true
            })
            .slice(currentPage * 3, Math.min((currentPage * 3) + 3, postCount))
            .map((post) =>
              <PostView
                post={post}
                preview={true}
                key={post.postId}
              />
            )}
          <PageButtons mt="-4" />
        </Flex>
        <Box />

      </Grid>
    </Container>
  )
}

export default Blog