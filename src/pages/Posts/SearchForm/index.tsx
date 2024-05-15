import { useContextSelector } from "use-context-selector";
import { SearchContainer } from "./styles";
import { PostsContext } from "../../../contexts/PostsContext";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import debounce from "debounce";

const searchFormSchema = z.object({
  q: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { total, fetchPosts } = useContextSelector(PostsContext, (context) => {
    return {
      total: context.posts.length,
      fetchPosts: context.fetchPosts
    }
  })

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearch(data: SearchFormInputs) {
    fetchPosts(data.q)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearch)}>
      <strong>Publicações</strong>
      <span>{total} publicaç{total > 1 || total === 0 ? 'ões' : 'ão'}</span>
      <input type="text" placeholder="Buscar conteúdo" {...register('q')} onChange={
        debounce(async (data) => {
          handleSearch({
            q: data.target.value
          })
        }, 500)
      } />
    </SearchContainer>
  )
}