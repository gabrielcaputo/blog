import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";

interface ProfileProps {
  name: string,
  github: {
    avatar: string,
    userName: string,
    url: string
  },
  description: string,
  role: string,
  followers: number
}

export function Profile({ name, github, description, role, followers }: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileImage src={github.avatar} />
      <ProfileContent>
        <header>
          <strong>{ name }</strong>
          <a href={github.url} target="_blank">Github <ArrowSquareOut  /></a>
        </header>
        <p>{description}</p>
        <ul>
          <li><GithubLogo /><span>{github.userName}</span></li>
          <li><Building /><span>{ role }</span></li>
          <li><Users /><span>{ followers } seguidor{ followers > 1 || followers <= 0 && 'es' }</span></li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}