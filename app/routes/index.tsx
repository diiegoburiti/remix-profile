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
    <Wrapper
    d='flex'
    flexDir='column'
    gap='20px'
    alignSelf='center'
    transform='translateY(10vh)'
    >
      <Heading as="h1" size="3xl" color='fontColor' textAlign='center' mb='24'>
        Search for a user <br /> on 
        <br />
        github :)

      </Heading>
      <Form isLoading={false} />
    </Wrapper>
  )
}
