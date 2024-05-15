export interface Post {
  number: number,
  title: string,
  url: string,
  body: string,
  comments: number,
  user: {
    login: string
  },
  created_at: string,
}