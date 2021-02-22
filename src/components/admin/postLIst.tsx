import BlogPostPreviewType from "../../types/blogPostPreview";
import * as React from "react";
import { Button, Divider, Heading, Text } from "@chakra-ui/core";
import { BlogPostList, createBlogPost, deleteBlogPost } from "../../services/admin-service";
import BlogPostFull from "../../types/blogPostFull";
import { url } from "../../utilities/fetchUtilities";
import { ctaButtonProps, primaryButtonOutline, primaryButtonSolid } from "../commonProps";

type Props = {
  posts: BlogPostList;
  editPost: (postId: number) => void;
};

const createNewPost = (createPostSuccess: (newPost: BlogPostFull) => void) => {
  createBlogPost(createPostSuccess, (e) => {
    console.error(e.toString());
  });
};

const fetchPosts = async (onComplete: (postList: BlogPostList) => void) => {
  const request = new Request(url("api/posts"), {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
  });
  const res = await fetch(request);
  const list: BlogPostList = await res.json();
  console.log(list);
  onComplete(list);
};

const ListItem = ({
  post,
  onEdit,
  onDelete,
}: {
  post: BlogPostFull;
  onEdit: (e: any) => void;
  onDelete: (e: any) => void;
}) => {
  return (
    <div>
      <Heading as="h2">{post.title}</Heading>
      <Text>{post.summary}</Text>
      <Text textAlign="right">{"Posted " + new Date(post.published!).toDateString()}</Text>
      <Button {...primaryButtonSolid} onClick={() => onEdit(post.postId)} mr={2}>
        Edit
      </Button>
      <Button {...primaryButtonOutline} onClick={onDelete} mr={2}>
        Delete
      </Button>
    </div>
  );
};

const PostList = ({ posts, editPost }: Props) => {
  const [blogPosts, setBlogPosts] = React.useState(posts.items);
  const refreshList = () => fetchPosts((postList) => setBlogPosts(postList.items));
  const createPost = () => {
    createNewPost((_) => {
      refreshList();
    });
  };

  const deletePage = (id: number) => {
    deleteBlogPost(id, refreshList, (e) => console.log(e));
  };

  return (
    <div>
      <Button {...primaryButtonSolid} onClick={createPost}>Create New</Button>
      <Divider my={4} />
      {blogPosts.map((item) => {
        return (
          <div key={item.postId}>
            <ListItem post={item} onEdit={editPost} onDelete={() => deletePage(item.postId)} />
            <Divider my={4} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
