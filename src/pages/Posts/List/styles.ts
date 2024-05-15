import styled, { css } from "styled-components";
import { BaseCard, BaseContainer } from "../../../components/Base/styles";

export const ListContainer = styled(BaseContainer)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  margin-bottom: 2rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const Post = styled(BaseCard)`${s => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;

  strong {
    font: ${s.theme.fonts["title-m"]};
    color: ${s.theme.colors["base-title"]};
  }

  time {
    font: ${s.theme.fonts["text-s"]};
    color: ${s.theme.colors["base-span"]};
  }
`}`