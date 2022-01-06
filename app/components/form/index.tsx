import { useState } from 'react'
import { Button, FormControl, Input, FormLabel } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Form as RemixForm } from 'remix'

export type FormProps = {
  isLoading: boolean
}

export const Form = ({ isLoading }: FormProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <RemixForm method="post">
      <FormControl>
        <FormLabel htmlFor="username">First name</FormLabel>
        <Input
          id="username"
          name="username"
          placeholder="Search for a user on github"
          onChange={handleChange}
          value={inputValue}
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
    </RemixForm>
  )
}
