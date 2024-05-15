import { useParams } from "react-router-dom"
import { PostHeader } from "./PostHeader"
import { PostContent } from "./PostContent"

export function PostDetail() {
  const { id } = useParams()
  return (
    <>
      <PostHeader />
      <PostContent />
      PostDetail {id}
    </>
  )
}