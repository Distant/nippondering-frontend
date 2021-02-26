import * as React from "react"
import { Button, Divider, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/core"
import {
  BlogPostList,
  createBlogPost,
  deleteBlogPost,
  publishBlogPost,
  unpublishBlogPost,
  RequestError,
} from "../../services/admin-service"
import BlogPostFull from "../../types/blogPostFull"
import { url } from "../../utilities/fetchUtilities"
import {
  ctaButtonProps,
  errorTextProps,
  primaryButtonOutline,
  primaryButtonSolid,
  secondaryButtonSolid,
  tertiaryButtonSolid,
} from "../commonProps"
import { useState } from "react"

type Props = {
  posts: BlogPostList
  editPost: (postId: number) => void
}

const createNewPost = (createPostSuccess: (newPost: BlogPostFull) => void) => {
  createBlogPost(createPostSuccess, (e) => {
    console.error(e.toString())
  })
}

const fetchPosts = async (onComplete: (postList: BlogPostList) => void) => {
  const request = new Request(url("api/posts"), {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
  })
  const res = await fetch(request)
  const list: BlogPostList = await res.json()
  onComplete(list)
}

const ListItem = ({
  post,
  onEdit,
  onDelete,
  onChangeStatus,
  errorMessage,
}: {
  post: BlogPostFull
  onEdit: (e: any) => void
  onDelete: (e: any) => void
  onChangeStatus: (postId: number, action: "Publish" | "Unpublish") => void
  errorMessage?: string
}) => {
  return (
    <div>
      <Heading textStyle="sectionTitle" textAlign="left" p={0} m={0} as="h2">
        {post.title}
      </Heading>
      <Text>{post.summary}</Text>
      <Text textAlign="right">{"Posted " + new Date(post.published!).toDateString()}</Text>
      <HStack>
        <Button {...primaryButtonSolid} onClick={() => onEdit(post.postId)} mr={2}>
          Edit
        </Button>
        <Button {...primaryButtonOutline} onClick={onDelete} mr={2}>
          Delete
        </Button>
        <Spacer />
        {post.status === "Unlisted" ? (
          <Button {...secondaryButtonSolid} onClick={() => onChangeStatus(post.postId, "Publish")}>
            Publish
          </Button>
        ) : (
          <Button {...tertiaryButtonSolid} onClick={() => onChangeStatus(post.postId, "Unpublish")}>
            Unpublish
          </Button>
        )}
      </HStack>
      {errorMessage && (
        <Text {...errorTextProps} mt={2} p={0}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
}

const PostList = ({ posts, editPost }: Props) => {
  const [blogPosts, setBlogPosts] = React.useState(posts.items)
  const [error, setError] = useState<{ message: string; id: number } | undefined>(undefined)

  const refreshList = () =>
    fetchPosts((postList) => {
      setError(undefined)
      setBlogPosts(postList.items)
    })
  const createPost = () => {
    createNewPost((_) => {
      refreshList()
    })
  }

  const deletePage = (id: number) => {
    deleteBlogPost(id, refreshList, (e) => {
      setError({ message: e?.errors[0]?.errorMessage ? e.errors[0].errorMessage : e.toString(), id: id })
    })
  }

  const changeStatus = (postId: number, action: "Publish" | "Unpublish") => {
    switch (action) {
      case "Publish":
        publishBlogPost(postId, refreshList, (e: any) => {
          setError({ message: e?.errors[0]?.errorMessage ? e.errors[0].errorMessage : e.toString(), id: postId })
        })
        return
      case "Unpublish":
        unpublishBlogPost(postId, refreshList, (e: any) => {
          setError({ message: e?.errors[0]?.errorMessage ? e.errors[0].errorMessage : e.toString(), id: postId })
        })
        return
    }
  }

  return (
    <div>
      <Flex alignItems="center">
        <Heading textStyle="sectionTitle" textAlign="left" fontWeight="bold" my={0} py={2} as="h2">
          My Blog Posts
        </Heading>
        <Spacer />
        <Button {...ctaButtonProps} onClick={createPost}>
          Create New
        </Button>
      </Flex>
      {blogPosts.map((item) => {
        return (
          <div key={item.postId}>
            <Divider my={4} />
            <ListItem
              post={item}
              onEdit={editPost}
              onDelete={() => deletePage(item.postId)}
              onChangeStatus={changeStatus}
              errorMessage={error && error.id === item.postId ? error.message : undefined}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PostList
