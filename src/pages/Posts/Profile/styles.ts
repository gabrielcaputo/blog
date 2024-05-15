import styled, { css } from "styled-components";
import { BaseCardStyle, BaseContainer } from "../../../components/Base/styles";

export const ProfileContainer = styled(BaseContainer)`${s => css`
  ${BaseCardStyle}
  background: ${s.theme.colors["base-profile"]};
  z-index: 1;
  position: relative;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`}`

export const ProfileImage = styled.img`${s => css`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 720px) {
    width: 6rem;
    height: 6rem;
    box-shadow: 0 1rem 4rem ${s.theme.colors.blue}33;
    margin-top: -2rem;
  }
`}`

export const ProfileContent = styled.div`${s => css`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font: ${s.theme.fonts['title-m']};
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
  }

  p {
    flex: 1;
    margin: 1rem 0;
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
      color: ${s.theme.colors["base-subtitle"]};
      
      svg {
        color: ${s.theme.colors["base-label"]};
      }
    }
  }
`}`