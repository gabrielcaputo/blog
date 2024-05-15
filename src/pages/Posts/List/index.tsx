import { ListContainer, Post } from "./styles";
import { excerptFormatter } from "../../../utils/formatter";
import { NavLink } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { PostsContext } from "../../../contexts/PostsContext";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function List() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })
  return (
    <ListContainer>
      
      {posts.map(post => {
        return (
          <Post key={post.number}>
            <strong>{post.title}</strong>
            <time>{formatDistanceToNow(post.created_at ? new Date(post.created_at) : new Date(), {
              addSuffix: true,
              locale: ptBR
            })}</time>
            <p>{excerptFormatter(post.body)}</p>
            <NavLink to={`/posts/${String(post.number)}`} />
          </Post>
        )
      })}
    </ListContainer>
  )
}