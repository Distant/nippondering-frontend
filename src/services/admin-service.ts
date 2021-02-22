import BlogPostFull, { PostImage } from "../types/blogPostFull";
import BlogPostPreviewType from "../types/blogPostPreview";
import { url } from "../utilities/fetchUtilities";

function createRequest(
  url: string,
  method: "GET" | "PUT" | "DELETE" | "POST",
  useCredentials: boolean,
  useCors: boolean,
  body?: any
) {
  return new Request(url, {
    method: method,
    credentials: useCredentials ? "include" : "omit",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: useCors ? "cors" : "no-cors",
  });
}

export type BlogPostList = {
  pageIndex: number;
  totalPages: number;
  items: BlogPostFull[];
};

const postBlogPostRequest = {
  title: "Untitled",
  content: "",
  tags: [],
  summary: "",
};

async function http<T>(request: RequestInfo, onSuccess: (obj: T) => void, onError: (e: any) => void) {
  try {
    let res = await fetch(request);

    if (!res.ok) {
      onError(res.statusText);
    } else {
      let obj: T = await res.json();
      onSuccess(obj);
    }
  } catch (ex) {
    onError(ex);
  }
}

export function createBlogPost(onSuccess: (newPost: BlogPostFull) => void, onError: (e: any) => void) {
  const request = createRequest(url("api/posts"), "POST", true, true, postBlogPostRequest);
  http(request, onSuccess, onError);
}

export function updateBlogPost(
  post: { postId: number; title: string; content: string; tags: string[]; summary: string },
  onSuccess: () => void,
  onError: (e: any) => void
) {
  fetch(createRequest(url("api/posts/" + post.postId), "PUT", true, true, post))
    .then(onSuccess)
    .catch((e) => {
      onError(e);
    });
}

export function deleteBlogPost(postId: number, onSuccess: () => void, onError: (e: any) => void) {
  fetch(createRequest(url("api/posts/" + postId), "DELETE", true, true, postId))
    .then(onSuccess)
    .catch((e) => {
      onError(e);
    });
}

const PostPublishRequest = {
  statusOperation: "Publish",
};

const PostUnpublishRequest = {
  statusOperation: "Unlist",
};

export async function publishBlogPost(
  postId: number,
  onSuccess: (newPost: BlogPostFull) => void,
  onError: (e: any) => void
) {
  const request = createRequest(url(`api/posts/${postId}/ChangeStatus`), "POST", true, true, PostPublishRequest);
  http(request, onSuccess, onError);
}

export async function unpublishBlogPost(
  postId: number,
  onSuccess: (newPost: BlogPostFull) => void,
  onError: (e: any) => void
) {
  const request = createRequest(url(`api/posts/${postId}/ChangeStatus`), "POST", true, true, PostUnpublishRequest);
  http(request, onSuccess, onError);
}

export function uploadImages(
  postId: number,
  files: FileList,
  onSuccess: (images: PostImage[]) => void,
  onError: (e: any) => void
) {
  let formData = new FormData();
  for (let index = 0; index < files.length; index++) {
    const file = files.item(index);
    if (file) formData.append("image", file, file.name);
  }
  console.log(formData);
  let request = new Request(url(`api/posts/${postId}/Images`), {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  http(request, onSuccess, onError);
}

type postTag = {
  tag: string;
  postCount: number;
};

export function searchTags(searchTerm: string, onSuccess: (tags: postTag[]) => void, onError: (e: any) => void) {
  const request = createRequest(url(`api/tags/search`), "POST", false, true, searchTerm);
  http(request, onSuccess, onError);
}
