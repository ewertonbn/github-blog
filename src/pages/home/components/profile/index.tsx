import { useCallback, useEffect, useState } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

import { api } from '../../../../lib/axios'
import { username } from '../../../../utils/credentials'

import { ProfileBox, ProfileImage } from './styles'

interface Profile {
  avatar_url: string
  company: string
  followers: string
  name: string
  login: string
  bio: string
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  const fetchProfile = useCallback(async () => {
    const response = await api.get(`users/${username}`)

    setProfile(response.data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileBox>
      <ProfileImage>
        <img src={profile.avatar_url} alt={profile.name} />
      </ProfileImage>
      <div>
        <header>
          <h1>{profile.name}</h1>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            <span>Github</span>
            <ArrowSquareOut size={16} weight="fill" />
          </a>
        </header>
        <p>{profile.bio}</p>
        <footer>
          <div>
            <GithubLogo size={18} weight="fill" />
            <span>{profile.login}</span>
          </div>
          <div>
            <Buildings size={18} weight="fill" />
            <span>{profile.company}</span>
          </div>
          <div>
            <Users size={18} weight="fill" />
            <span>{profile.followers} seguidores</span>
          </div>
        </footer>
      </div>
    </ProfileBox>
  )
}
