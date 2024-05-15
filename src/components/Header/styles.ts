import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`${s => css`
  display: flex;
  width: 100vw;
  height: 18.5rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  color: ${s.theme.blue};
  text-transform: uppercase;
  position: relative;
  gap: 0.5rem;
  background:
    url('/images/header-effect-left.svg') no-repeat 0 50%,
    url('/images/header-effect-right.svg') no-repeat 100% 50%,
    ${s.theme["base-profile"]};

  svg {
    font-size: 4rem;
  }

  @media screen and (max-width: 960px) {
    height: 10rem;
    font-size: 1rem;

    svg {
      font-size: 2rem;
    }
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: calc(18.5rem / 2);
    height: calc(18.5rem / 2);
    background: ${s.theme.blue};
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
    filter: drop-shadow(calc(18.5rem / 2.75) calc(18.5rem / 2.75) 8rem ${s.theme.blue}aa);
    @media screen and (max-width: 960px) {
      filter: drop-shadow(calc(10rem / 2.75) calc(10rem / 2.75) 6rem ${s.theme.blue});
    }
  }

  &::after {
    right: 0;
    transform: translate(100%, -100%);
    filter: drop-shadow(calc(-18.5rem / 2.75) calc(18.5rem / 2.75) 8rem ${s.theme.blue}aa);
    @media screen and (max-width: 960px) {
      filter: drop-shadow(calc(-10rem / 2.75) calc(10rem / 2.75) 6rem ${s.theme.blue});
    }
  }

  svg {
    filter: drop-shadow(-1px -1px 0 ${s.theme.blue})
            drop-shadow(-1px 1px 0 ${s.theme.blue})
            drop-shadow(1px -1px 0 ${s.theme.blue})
            drop-shadow(1px 1px 0 ${s.theme.blue});
  }
    
`}`