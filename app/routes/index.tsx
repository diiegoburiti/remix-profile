import { Heading } from '@chakra-ui/react'
import { ActionFunction, redirect } from 'remix'
import { Form } from '~/components/form'
import { Wrapper } from '~/components/wrapper'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const { username } = Object.fromEntries(formData)

  return redirect(`/profile/${username}`)
}

export default function Index() {
  return (
    <Wrapper>
      <Heading as="h1" size="3xl">
        Search for a profile on github.
      </Heading>
      <Form isLoading={false} />
    </Wrapper>
  )
}
