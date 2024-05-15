import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";
import { Post } from "../@types/posts";
import { User } from "../@types/user";

export interface PostsContextType {
  posts: Post[],
  user: User,
  fetchPosts: (q?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({children}: {children: ReactNode}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [user, setUser] = useState<User>({
    login: import.meta.env.VITE_GITHUB_USERNAME,
    bio: '',
    avatar_url: `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}.png`,
    html_url: '',
    name: '',
    followers: 0,
    company: '',
  })

  const fetchPosts = useCallback(async (q: string = '') => {
    const endpoint = `/search/issues`
    const repo = `${import.meta.env.VITE_GITHUB_USERNAME}/${import.meta.env.VITE_GITHUB_REPOSITORY}`
    const response = await api.get(endpoint, {
      params: {
        q: `${q} repo:${repo}`
      }
    })
    setPosts(response.data.items)
  }, [])

  const fetchUser = useCallback(async () => {
    const endpoint = `/users/${import.meta.env.VITE_GITHUB_USERNAME}`
    const response = await api.get(endpoint)
    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
    fetchUser()
  }, [fetchPosts, fetchUser])

  return <PostsContext.Provider value={{
    posts,
    user,
    fetchPosts
  }}>
    {children}
  </PostsContext.Provider>
}