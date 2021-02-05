import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Head from 'next/head'
import BlogPostFull from '../../types/blogPostFull'
import BlogPostPreviewType from '../../types/blogPostPreview'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/core'
import PostView from '../../components/postView'
import { FaChevronRight } from 'react-icons/fa'
import {url} from "../../utilities/fetchUtilities";

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const s = params.slug.split("-");
  const res = await fetch(url(`api/posts/${s[s.length - 1]}/detail`));
  const post: BlogPostFull = await res.json();

  return {
    props: {
      post
    }
  }
}

type BlogPostList = {
  pageIndex: number
  totalPages: number
  items: BlogPostPreviewType[]
}

export async function getStaticPaths() {
  const res = await fetch(url("api/posts/list"));
  const posts: BlogPostList = await res.json();

  return {
    paths: posts.items.map((post) => {
      return {
        params: {
          slug: `${post.slug}-${post.postId}`,
        },
      }
    }),
    fallback: false,
  }
}

type Props = {
  post: BlogPostFull
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{`${post.title} - Nippondering Blog`} </title>
        <meta property="og:title" content={`Nippondering Blog`} />
        <meta property="og:description" content={post.title} />
        <meta property="og:image" content={url("meta_logo.png")} />
        <meta property="og:url" content={url(`blog/${post.slug}-${post.postId}`)} />
        <meta property="twitter:card" content={"summary_large_image"} />
        <meta property="twitter:site" content="@nippondering" />
        <meta property="twitter:title" content={`Nippondering Blog`} />
        <meta property="twitter:description" content={post.title} />
        <meta property="twitter:image" content={url("meta_logo.png")} />
      </Head>

      <Container>
        {router.isFallback ? (null
        ) : (
            <Box mb="8" maxWidth="1000px" mx="auto">
              <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href={"/blog/" + post.slug + "-" + post.postId}>{post.title}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <PostView post={post} />
            </Box>
          )}
      </Container>
    </>
  )
}

export default Post