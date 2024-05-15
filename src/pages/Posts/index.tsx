import { List } from "./List";
import { Profile } from "./Profile";
import { SearchForm } from "./SearchForm";

export function Posts() {
  return (
    <>
      <Profile
        name="Gabriel Caputo"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, sapiente"
        github={{
          avatar: "https://github.com/gabrielcaputo.png",
          url: "https://github.com/gabrielcaputo",
          userName: "gabrielcaputo"
        }}
        followers={0}
        role="Desenvolvedor Front-end"
      />
      <SearchForm />
      <List />
    </>
  )
}