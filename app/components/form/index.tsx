import { useState } from 'react'
import {
  Button,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export type FormProps = {
  isLoading: boolean
  onSubmit: (username: string) => void
}

export const Form = ({isLoading, onSubmit}: FormProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(inputValue)
  }

  return (
    <form method="post" action={`github/${inputValue}`} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="Search for a user on github"
          onChange={handleChange}
        />
      </FormControl>
      <Button
        mt={4}
        w={40}
        colorScheme="teal"
        fontSize={28}
        justifyContent="space-between"
        isLoading={isLoading}
        type="submit"
      >
        <span>Search</span>
        <Search2Icon w={5} h={5} />
      </Button>
    </form>
  )
}
