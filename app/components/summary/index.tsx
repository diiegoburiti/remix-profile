import { Box, Image, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import { InfoIcon as Icon } from '@chakra-ui/icons'
import { UserTypes } from '~/services/github'

export type SummaryProps = UserTypes

export const Summary = ({
  avatar_url,
  name,
  login,
  html_url,
  bio,
  location,
  followers,
  following
}: SummaryProps) => {
  const InfoIcon = () =>  <ListIcon as={Icon} color="borderColor" />
  

  return (
    <Flex justifyContent="space-evenly" alignItems="center">
      <Image
        src={avatar_url}
        alt={`${name} avatar`}
        boxSize="168px"
        objectFit="cover"
        borderRadius="full"
        borderWidth="5px"
        borderColor="borderColor"
      />
      <Box
        borderWidth="1px"
        borderRadius="lg"
        py="2"
        borderColor="borderColor"
        w="20rem"
      >
        <List spacing={2} color="fontColor" ml="2">
          <ListItem>
            <InfoIcon />
            Name: {name}
          </ListItem>
          <ListItem>
            <InfoIcon />
            Nickname: {login}
          </ListItem>
          <ListItem>
            <InfoIcon />
            Followers: {followers}
          </ListItem>
          <ListItem>
            <InfoIcon />
            Following: {following}
          </ListItem>

          <ListItem>
            <InfoIcon />
            Location: {location}
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}
