import { useParams } from "react-router-dom"

export function Post() {
  const { id } = useParams()
  return (
    <>
      Post {id}
    </>
  )
}