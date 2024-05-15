import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";
import { useContextSelector } from "use-context-selector";
import { PostsContext } from "../../../contexts/PostsContext";

export function Profile() {
  const { name, avatar_url, html_url, bio, login, company, followers } = useContextSelector(PostsContext, (context) => {
    return context.user
  })
  return (
    <ProfileContainer>
      <ProfileImage src={avatar_url} />
      <ProfileContent>
        <header>
          <strong>{ name }</strong>
          <a href={html_url} target="_blank">Github <ArrowSquareOut  /></a>
        </header>
        {bio && <p>{ bio }</p>}
        <ul>
          <li><GithubLogo weight="fill" /><span>{login}</span></li>
          {company && <li><Building weight="fill" /><span>{ company }</span></li>}
          <li><Users weight="fill" /><span>{ followers } seguidor{ followers > 1 || followers <= 0 && 'es' }</span></li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}