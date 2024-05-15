import styled from "styled-components";
import { BaseContainerStyle } from "../../../components/Base/styles";
import { css } from "styled-components";

export const SearchContainer = styled.form`${s => css`
  ${BaseContainerStyle}
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font: ${s.theme.fonts["title-s"]};
    color: ${s.theme.colors["base-subtitle"]};
  }

  span {
    font: ${s.theme.fonts["text-s"]};
    color: ${s.theme.colors["base-span"]};
  }

  input {
    width: 100%;
    background: ${s.theme.colors["base-input"]};
    border: 1px solid ${s.theme.colors["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${s.theme.colors["base-label"]};
    }
  }
`}`