import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`${s => css`
  display: flex;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  color: ${s.theme.colors.blue};
  text-transform: uppercase;
  position: relative;
  gap: 0.5rem;
  padding: 4rem 0 8rem;
  margin-bottom: -4rem;
  background:
    url('/images/header-effect-left.svg') no-repeat 0 50%,
    url('/images/header-effect-right.svg') no-repeat 100% 50%,
    ${`radial-gradient(ellipse at bottom, ${s.theme.colors["base-border"]} 0%, ${s.theme.colors["base-profile"]} 50%)`};
    ${s.theme.colors["base-profile"]};

  svg {
    font-size: 4rem;
  }

  @media screen and (max-width: 960px) {
    padding: 2rem 0 4rem;
    font-size: 1rem;
    background-size: 40vw, 40vw, auto, auto;
    margin-bottom: -2rem;

    svg {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    background-size: 50vw, 50vw, auto, auto;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: calc(18.5rem / 2);
    height: calc(18.5rem / 2);
    background: ${s.theme.colors.blue};
    position: absolute;
    top: 0;
    border-radius: 50%;
    background: red;

    @media screen and (max-width: 960px) {
      width: calc(10.5rem / 2);
      height: calc(10.5rem / 2);
    }
  }

  &::before {
    left: 0;
    transform: translate(-100%, -100%);
    filter: drop-shadow(calc(18.5rem / 2.75) calc(18.5rem / 2.75) 8rem ${s.theme.colors.blue}aa);
    @media screen and (max-width: 960px) {
      filter: drop-shadow(calc(10rem / 2.75) calc(10rem / 2.75) 6rem ${s.theme.colors.blue}aa);
    }
  }

  &::after {
    right: 0;
    transform: translate(100%, -100%);
    filter: drop-shadow(calc(-18.5rem / 2.75) calc(18.5rem / 2.75) 8rem ${s.theme.colors.blue}aa);
    @media screen and (max-width: 960px) {
      filter: drop-shadow(calc(-10rem / 2.75) calc(10rem / 2.75) 6rem ${s.theme.colors.blue}aa);
    }
  }

  svg {
    filter: drop-shadow(-1px -1px 0 ${s.theme.colors.blue})
            drop-shadow(-1px 1px 0 ${s.theme.colors.blue})
            drop-shadow(1px -1px 0 ${s.theme.colors.blue})
            drop-shadow(1px 1px 0 ${s.theme.colors.blue});
  }
    
`}`