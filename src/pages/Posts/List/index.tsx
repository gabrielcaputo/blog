import { excerptFormatter } from "../../../utils/formatter";
import { ListContainer, Post } from "./styles";

export function List() {
  return (
    <ListContainer>
      <Post>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <time>Há 1 dia</time>
        <p>{excerptFormatter('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam porro iste cupiditate eaque consectetur fuga quibusdam quos laboriosam quod!')}</p>
      </Post>
      <Post>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <time>Há 1 dia</time>
        <p>{excerptFormatter('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam porro iste cupiditate eaque consectetur fuga quibusdam quos laboriosam quod!')}</p>
      </Post>
      <Post>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <time>Há 1 dia</time>
        <p>{excerptFormatter('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam porro iste cupiditate eaque consectetur fuga quibusdam quos laboriosam quod!')}</p>
      </Post>
      <Post>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <time>Há 1 dia</time>
        <p>{excerptFormatter('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam porro iste cupiditate eaque consectetur fuga quibusdam quos laboriosam quod!')}</p>
      </Post>
      <Post>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <time>Há 1 dia</time>
        <p>{excerptFormatter('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam porro iste cupiditate eaque consectetur fuga quibusdam quos laboriosam quod!')}</p>
      </Post>
    </ListContainer>
  )
}