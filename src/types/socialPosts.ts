export type SocialMediaType= {
  twitter: boolean
  facebook: boolean
  instagram: boolean
}

export enum SocialMediaPostStatus {
  NotSent = 1,
  Sending = 2,
  Sent = 3,
  Failed = 4
}

export type ScheduledPost = {
  postId: number
  message: string
  sendDate: string
  mediaType: SocialMediaType
  status: SocialMediaPostStatus
}

// post
export type ScheduledPostRequestDto = {
  message: string
  sendDate: string
}

// get
export type ScheduledPostDto = {
  postId: number
  message: string
  sendDate: string
  mediaType: SocialMediaType
  status: SocialMediaPostStatus
}

export type Post = {
  message: string
  author: string
  datePosted: Date
  postId: number
}

export type ScheduledPostList = {
  posts: ScheduledPost[]
  totalPages: number
  page: number
}
