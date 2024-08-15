import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as z from 'zod'

import { api } from '../../lib/axios'
import { repo, username } from '../../utils/credentials'

import { Profile } from './components/profile'
import { HomeContainer, NotFound, PostItem, PostList, Search } from './styles'

interface Item {
  number: number
  title: string
  body: string
  created_at: string
}

interface Issues {
  total_count: number
  items: Item[]
}

export function Home() {
  const [issues, setIssues] = useState<Issues>({} as Issues)

  const fetchIssues = useCallback(async (query: string = '') => {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:${username}/${repo} ${query}`,
      },
    })

    setIssues(response.data)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const searchIssueSchema = z.object({
    search: z.string(),
  })

  type SearchIssueInputs = z.infer<typeof searchIssueSchema>

  const { reset, register, handleSubmit } = useForm<SearchIssueInputs>({
    resolver: zodResolver(searchIssueSchema),
  })

  function handleSearchIssues(data: SearchIssueInputs) {
    fetchIssues(data.search)
    reset()
  }

  return (
    <HomeContainer>
      <Profile />

      <Search>
        <div>
          <h2>Publicações</h2>
          <span>
            {issues.total_count}{' '}
            {issues.total_count > 1 ? 'publicações' : 'publicação'}
          </span>
        </div>
        <form onSubmit={handleSubmit(handleSearchIssues)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('search')}
          />
        </form>
      </Search>
      {issues.total_count > 0 ? (
        <PostList>
          {issues.items?.map((issue) => {
            return (
              <PostItem key={issue.number} to={`/post/${issue.number}`}>
                <div>
                  <h3>{issue.title}</h3>
                  <span>
                    {formatDistanceToNow(new Date(issue.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <p>{issue.body}</p>
              </PostItem>
            )
          })}
        </PostList>
      ) : (
        <NotFound>
          <p>Nenhuma publicação foi encontrada</p>
        </NotFound>
      )}
    </HomeContainer>
  )
}
