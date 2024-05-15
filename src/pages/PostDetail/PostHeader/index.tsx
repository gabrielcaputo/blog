import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { PostHeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface PostHeaderProps {
  title: string,
  html_url: string,
  comments: number,
  user: {
    login: string
  },
  created_at: string,
}

export function PostHeader({ title, html_url, comments, user, created_at }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <NavLink to="/"><ArrowLeft /> Voltar</NavLink>
      <a href={html_url} target="_blank">Ver no Github <ArrowSquareOut /></a>
      <strong>{title}</strong>
      <ul>
        <li><GithubLogo weight="fill" /><span> {user.login}</span></li>
        <li><Calendar weight="fill" /><span> {formatDistanceToNow(created_at ? new Date(created_at) : new Date(), {
          addSuffix: true,
          locale: ptBR
        })}</span></li>
        <li><ChatCircle weight="fill" /><span>{ comments } comentário{ comments > 1 || comments <= 0 && 's' }</span></li>
      </ul>
    </PostHeaderContainer>
  )
}