export interface TimeLinePost {
  id: number
  topic_id: Number
  user_id: number
  post_content: string
  created_at: string
  updated_at: string
  isReviewedByUser: boolean
  total_hearts: number
  user: User
}

export interface TimeLineData {
  post: TimeLinePost[]
}

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
  icon: string
  is_admin: boolean
  user_total_hearts: number
  posts: Post[]
}

export interface Post {
  id: number
  topic_id: number
  user_id: number
  post_content: string
  created_at: string
  updated_at: string
  total_hearts: number
  topic: Topic
}

export interface Topic {
  id: number
  topic: string
  image: string
  created_at: string
  updated_at: string
}

export interface Users {
  users: User[]
}

export interface DetailUser {
  user: User
}

export interface TopicData {
  topic: Topic
}

export interface PostData {
  post: Post
}

export interface Posts {
  post: Post[]
}
