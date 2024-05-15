import styled, { css } from "styled-components";
import { BaseContainer } from "../../../components/Base/styles";

export const PostContentContainer = styled(BaseContainer)`${s => css`
  padding: 1rem 2rem;

  @media screen and (max-width: 960px) {
    padding: 1rem 0;
  }

  a {
    color: #4183c4;
    text-decoration: none;
	}

  a:hover {
    text-decoration: underline;
	}

  p, blockquote, ul, ol, dl, table, pre {
    margin: 1rem 0;
	}

  ul, ol {
    padding-left: 1.75rem;
	}

  h1 {
    font-size: 2.5rem;
	}

  h2 {
    font-size: 2.0rem;
	}

  h3 {
    font-size: 1.5rem;
	}

  h4 {
    font-size: 1.2rem;
	}

  h5 {
    font-size: 1.0rem;
	}

  h6 {
    font-size: 1.0rem;
	}

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.6;
    margin: 1rem 0 1rem 0;
	}

  h1 + p, h2 + p, h3 + p {
    margin-top: 0.625rem;
	}
	
  img {
    max-width: 100%;
  }

  code,
  pre {
    border-radius: 3px;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    font-size: 12px;
    margin: 0 2px;
    white-space: pre;
	}

  pre code {
    border: none;
    margin: 0;
    padding: 0;
    white-space: pre;
	}

  pre > div {
    background: ${s.theme.colors["base-post"]} !important;
    padding: 2rem !important;
    border-radius: 6px !important;
    
    @media screen and (max-width: 960px) {
      padding: 1rem !important;
    }
  }
`}`