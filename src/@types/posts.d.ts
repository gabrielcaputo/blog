export interface Post {
  number: number,
  title: string,
  html_url: string,
  body: string,
  comments: number,
  user: {
    login: string
  },
  created_at: string,
}