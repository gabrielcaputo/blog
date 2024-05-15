import { List } from "./List";
import { Profile } from "./Profile";
import { SearchForm } from "./SearchForm";

export function Posts() {
  return (
    <>
      <Profile />
      <SearchForm />
      <List />
    </>
  )
}