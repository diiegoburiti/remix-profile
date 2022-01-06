import { Box, Image, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { UserTypes } from '~/services/github'

export type SummaryProps = UserTypes

export const Summary = ({ avatar_url, name }: SummaryProps) => {
  return (
    <Flex>
        <Image
          src={avatar_url}
          alt={`${name} avatar`}
          boxSize="150px"
          objectFit="cover"
          borderRadius="full"
        />

      <List spacing={3}>
        <ListItem>
          <ListIcon as={InfoIcon} color="green.500" />
          Name: {name}
        </ListItem>
        <ListItem>
          <ListIcon as={InfoIcon} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={InfoIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={InfoIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
    </Flex>
  )
}
