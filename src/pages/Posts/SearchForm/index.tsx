import { SearchContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchContainer>
      <strong>Publicações</strong>
      <span>6 publicações</span>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}