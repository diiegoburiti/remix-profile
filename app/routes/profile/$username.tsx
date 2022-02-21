import { Heading, Button } from '@chakra-ui/react'
import { LoaderFunction, useLoaderData, useCatch, Link } from 'remix'
import { Summary } from '~/components/summary'
import { Wrapper } from '~/components/wrapper'
import { getGithubProfile, LoaderData } from '~/services/github'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await getGithubProfile(String(params.username))
  }
}

export function CatchBoundary() {
  const caught = useCatch()
  return (
    <Wrapper d="flex" flexDir="column" alignItems="center" mt="20vh">
      <Heading
        as="h1"
        size="3xl"
        color="fontColor"
        textAlign="center"
        mb="10vh"
      >
        {caught.data}
      </Heading>

      <Button
        bg="borderColor"
        color="fontColor"
        d="flex"
        justifyContent="space-between"
        w="8vw"
      >
        <ArrowBackIcon w={5} />
        <Link to="/">Back</Link>
      </Button>
    </Wrapper>
  )
}

export default function () {
  const { user } = useLoaderData<LoaderData>()

  return (
    <Wrapper mt="2rem">
      <Summary {...user} />
    </Wrapper>
  )
}
