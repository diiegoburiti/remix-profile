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
      <FormControl position="relative">
        <Input
          aria-label="input to search for a profile on github"
          id="username"
          name="username"
          placeholder="Search for a user on github."
          onChange={handleChange}
          value={inputValue}
          color="fontColor"
          border="2px solid white"
          _focus={{
            borderColor: 'borderColor'
          }}
        />
        <Button
          colorScheme="teal"
          fontSize={28}
          justifyContent="space-between"
          right="0px"
          position="absolute"
          bg="borderColor"
          border='2px solid borderColor'
          borderLeftRadius="0"
          _hover={{
            opacity: '50%'
          }}
          isLoading={isLoading}
          type="submit"
          disabled={!inputValue}
        >
          <Search2Icon w={5} h={5} />
        </Button>
      </FormControl>
    </RemixForm>
  )
}
