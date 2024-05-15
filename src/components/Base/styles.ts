import styled, { css } from "styled-components";

export const BaseContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: calc(100% - 3rem);
  }
`

export const BaseCardStyle = css`${s => css`
  border-radius: 10px;
  padding: 2rem;
  background: ${s.theme.colors["base-post"]};
  
  @media screen and (max-width: 960px) {
    padding: 1.5rem;
  }
`}`

export const BaseCard = styled.div`
  ${BaseCardStyle}
`