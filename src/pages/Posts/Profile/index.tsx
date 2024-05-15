import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500" />
      <ProfileContent>
        <header>
          <strong>Nome</strong>
          <a href="#">Github <ArrowSquareOut  /></a>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, sapiente!</p>
        <ul>
          <li><GithubLogo /><span>username</span></li>
          <li><Building /><span>Cargo</span></li>
          <li><Users /><span>0 seguidores</span></li>
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}