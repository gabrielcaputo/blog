import { PostContentContainer } from "./styles";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface PostContentProps {
  body: string
}

export function PostContent(props: PostContentProps) {
  const { body } = props
  return (
    <PostContentContainer>
      <Markdown
        children={body}
        components={{
          code(props) {
            const {children, className, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dracula}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </PostContentContainer>
  )
}