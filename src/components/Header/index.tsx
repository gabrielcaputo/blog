import { Terminal } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <Terminal color={theme["base-background"]} weight="light" />
      <span>Blog</span>
    </HeaderContainer>
  )
}