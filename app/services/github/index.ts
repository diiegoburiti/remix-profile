import { fetchGithubUrl } from '~/utils/request'

type RepositoryTypes = {
  id: string
  name: string
  description: string
  language: string
  created_at: string
  clone_url: string
}

export type UserTypes = {
  name: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  location: string
  followers: string
  following: string
  repos_url: string
  repositories: Array<RepositoryTypes>
}

export type LoaderData = {
  user: UserTypes
}

export const getGithubProfile = async (username: string) => {
  const response = await fetchGithubUrl(
    `https://api.github.com/users/${username}`
  )

  if (response.status !== 200) {
    throw new Response('Oops! something went wrong. Please try again later', {
      status: response.status
    })
  }

  const userResponse: UserTypes = await response.json()

  const repos = await fetchGithubUrl(userResponse.repos_url)
  const repositories = await repos.json()

  const {
    bio,
    name,
    avatar_url,
    html_url,
    location,
    login,
    followers,
    following,
    repos_url
  } = userResponse

  return {
    avatar_url,
    bio,
    name,
    html_url,
    location,
    login,
    followers,
    following,
    repos_url,
    repositories
  }
}
