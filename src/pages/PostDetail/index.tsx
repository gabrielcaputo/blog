import { useParams } from "react-router-dom"
import { PostHeader } from "./PostHeader"
import { PostContent } from "./PostContent"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { Post } from "../../@types/posts"

export function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<Post>({
    number: 0,
    title: "",
    html_url: "",
    body: "",
    comments: 0,
    user: {
      login: ""
    },
    created_at: "",
  })

  const fetchPost = useCallback(async () => {
    const endpoint = `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${import.meta.env.VITE_GITHUB_REPOSITORY}/issues/${id}`
    const response = await api.get(endpoint)
    setPost(response.data)
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <>
      <PostHeader { ...post } />
      <PostContent { ...post } />
    </>
  )
}