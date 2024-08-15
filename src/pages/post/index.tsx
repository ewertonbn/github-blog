import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowSquareOut,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import remarkGfm from 'remark-gfm'

import { api } from '../../lib/axios'
import { repo, username } from '../../utils/credentials'

import { PostContainer, PostContent, PostHeader } from './styles'

interface Post {
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const [post, setPost] = useState<Post>({} as Post)

  const { postId } = useParams()

  const fetchIssue = useCallback(async () => {
    const response = await api.get(`repos/${username}/${repo}/issues/${postId}`)

    setPost(response.data)
  }, [postId])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      <PostHeader>
        <header>
          <Link to="/">
            <ArrowLeft size={12} />
            Voltar
          </Link>
          <a href={post?.html_url} target="_blank" rel="noreferrer">
            Ver no github
            <ArrowSquareOut size={16} weight="fill" />
          </a>
        </header>
        <h1>{post.title}</h1>
        <footer>
          <div>
            <GithubLogo size={18} weight="fill" />
            <span>{post.user?.login}</span>
          </div>
          <div>
            <ChatCircle size={18} weight="fill" />
            <span>
              {post.comments} {post.comments > 1 ? 'comentários' : 'comentário'}
            </span>
          </div>
        </footer>
      </PostHeader>
      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
