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
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      accept: 'application/vnd.github.v3.json',
      Authorization: `token ${process.env.PRIVATE_KEY}`
    }
  })

  if (res.status !== 200) {
    throw new Response('Oops! something went wrong. Please try again later', {
      status: res.status
    })
  }

  const response: UserTypes = await res.json()

  const repos = await fetch(response.repos_url)

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
  } = response

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
