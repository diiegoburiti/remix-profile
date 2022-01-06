import { LoaderFunction, useLoaderData, redirect, ActionFunction } from 'remix'
import { Summary } from '~/components/sumamry'
import { Wrapper } from '~/components/wrapper'
import { getGithubProfile, LoaderData } from '~/services/github'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await getGithubProfile(String(params.username))
  }
}

export default function () {
  const { user } = useLoaderData<LoaderData>()

  return (
    <Wrapper>
      <Summary {...user} />
    </Wrapper>
  )
}
