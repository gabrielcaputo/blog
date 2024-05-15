import { List } from "./List";
import { Profile } from "./Profile";
import { SearchForm } from "./SearchForm";
import { PostsProvider } from "../../contexts/PostsContext";
export function Posts() {

  return (
    <PostsProvider>
      <Profile />
      <SearchForm />
      <List />
    </PostsProvider>
  )
}