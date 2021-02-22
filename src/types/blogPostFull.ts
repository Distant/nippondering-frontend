type PostTag = {
  tag: string;
  postCount: number;
};

export type PostImage = {
  imageID: string;
  creatorId: string;
  postId: number;
  path: string;
  hasWebp: boolean;
  webpConversionFailed: boolean;

  created: string;
  lastChanged: string;
};

type BlogPostFull = {
  postId: number;
  ownerId: string;
  owner: string;
  ownerImage?: string;
  slug: string;
  title: string;
  status: "Published" | "Unlisted" | "Deleted";
  content: string;
  tags: string[];
  images: PostImage[];

  created: string;
  lastChanged: string;
  published?: string;

  summary: string;
};

export default BlogPostFull;
