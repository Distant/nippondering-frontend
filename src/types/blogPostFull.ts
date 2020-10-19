
type PostTag = {
  tag: string
  postCount: number
}

type PostImage = {
  imageID : string
  creatorId: string
  postId: number
  path: string

  created: Date
  lastChanged: Date
}

enum PostStatus {
  Published,
  Unpublished,
  Deleted
}

const parsePostStatus = (status : string) => {
  switch (status) {
    case "Published": return PostStatus.Published;
    case "Unpublished": return PostStatus.Unpublished;
    case "Deleted": return PostStatus.Deleted;
  }
  return PostStatus.Unpublished
}

type BlogPostFull = {
  postId: number
  //OwnerId: string
  owner: string
  ownerImage: string
  slug: string
  title: string
  status: PostStatus
  content: string
  tags: string[]
  image: string

  created: string
  lastChanged: string
  published?: string

  summary: string
}

export default BlogPostFull