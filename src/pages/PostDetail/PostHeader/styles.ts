import styled, { css } from "styled-components";
import { BaseCardStyle, BaseContainer } from "../../../components/Base/styles";

export const PostHeaderContainer = styled(BaseContainer)`${s => css`
  ${BaseCardStyle}
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  strong {
    width: 100%;
    margin: 2rem 0 1rem;
    font: ${s.theme.fonts['title-l']};
    color: ${s.theme.colors["base-title"]};
  }

  a {
    font: ${s.theme.fonts['link']};
    text-transform: uppercase;
    text-decoration: none;
    color: ${s.theme.colors.blue};
    transition: all 0.2s ease;
    
    &:hover {
      color: ${s.theme.colors["base-title"]};
    }
  }

  ul {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 720px) {
      gap: 0rem 1rem;
      align-items: center;
      justify-content: center;
    }

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${s.theme.colors["base-span"]};
      
      svg {
        color: ${s.theme.colors["base-label"]};
      }
    }
  }

`}`