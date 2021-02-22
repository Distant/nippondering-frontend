import { useState, useContext, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../user-context";
import Link from "next/link";
import { attemptLogin } from "../../login-service";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/core";
import RequestStatus from "../../types/requestStatus";
import { FaChevronRight } from "react-icons/fa";
import { primaryButtonSolid, shadows } from "../../components/commonProps";
import Container from "../../components/container";
import { url } from "../../utilities/fetchUtilities";
import { BlogPostList } from "../../services/admin-service";
import PostList from "../../components/admin/postLIst";
import PostEditor from "../../components/admin/postEditor";
import BlogPostFull from "../../types/blogPostFull";

const fetchBlogPost = async (url: string) => {
  const res = await fetch(new Request(url, { credentials: "include" }));
  const post: BlogPostFull = await res.json();
  return post;
};

const fetchUserPosts = async (url: string) => {
  const res = await fetch(new Request(url, { credentials: "include" }));
  const post: BlogPostList = await res.json();
  return post;
};

const Dashboard = () => {
  const router = useRouter();
  let session = useContext(UserContext);

  const [editingPost, setEditingPost] = useState<BlogPostFull | null>(null);
  const [fetching, setFetching] = useState(false);

  const [userPosts, setUserPosts] = useState<BlogPostList | null>(null);

  const editPost = async (id: number) => {
    const fetchedPost = await fetchBlogPost(url(`api/posts/${id}`));
    setEditingPost(fetchedPost);
  };

  useEffect(() => {
    fetchUserPosts(url("api/posts"))
      .then((p) => setUserPosts(p))
      .catch((e) => {});
  }, []);

  return (
    <Container>
      <Breadcrumb
        display={{ base: "none", md: "block" }}
        fontSize="0.8rem"
        p={2}
        color="#555"
        separator={<FaChevronRight color="#555" size="0.6rem" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/dashboard">Admin Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden" p={4}>
        {session.user != null && session.user != "" && userPosts != null ? (
          editingPost == null ? (
            !fetching && <PostList posts={userPosts} editPost={(postId: number) => editPost(postId)} />
          ) : (
            <PostEditor post={editingPost} stopEditing={() => setEditingPost(null)} />
          )
        ) : null}
      </Box>
    </Container>
  );
};

export default Dashboard;
