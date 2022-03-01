import {
  Box,
  Image,
  List,
  ListItem,
  ListIcon,
  Flex,
  Grid,
  GridItem,
  Badge,
  Text,
  Link,
  Heading
} from '@chakra-ui/react'
import { InfoIcon as Icon, ExternalLinkIcon } from '@chakra-ui/icons'
import { UserTypes } from '~/services/github'
import { Wrapper } from '~/components/wrapper'
import { formatDate } from '~/utils/date'

export type SummaryProps = UserTypes

export const Summary = ({
  avatar_url,
  name,
  login,
  html_url,
  bio,
  location,
  followers,
  following,
  repositories
}: SummaryProps) => {
  const InfoIcon = () => <ListIcon as={Icon} color="borderColor" />

  const TextComponent = (text: string) => (
    <Text as="span" color="gray.500" mr=".6rem">
      {text}
    </Text>
  )

  /*   const Second = ({container}) => {
    const [showMore, setShowMore] = useState(false);
 
   return(
     <div>
       {container?.slice(0, 5).map((container) => (
          <h3>{container}</h3>
       ))}
       
       {showMore && container?.slice(5).map((container) => (
          <h3>{container}</h3>
       ))} //this would show the remaining values
       <button type="button" class="btn btn-primary" onClick={() => setShowMore(true)}>Primary</button>
     </div>
  )
 } */

  return (
    <Wrapper flexDir="column">
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
          borderColor="borderColor"
          py="2"
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

      <Heading color="fontColor" textAlign="center" my="1.6rem">
        Repositories
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {repositories.map((repository) => (
          <GridItem key={repository.id}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              borderColor="borderColor"
              p="2"
            >
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                isTruncated
                color="fontColor"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <div>
                    <Text
                      as="span"
                      color="gray.500"
                      mr=".6rem"
                      fontWeight="normal"
                    >
                      Repository Name:
                    </Text>
                    {repository.name}
                  </div>

                  {repository.language && (
                    <Badge
                      variant="outline"
                      borderRadius="full"
                      colorScheme="pink"
                      p="1"
                    >
                      {repository.language}
                    </Badge>
                  )}
                </Flex>
              </Box>
              <Text color="fontColor" isTruncated maxWidth="15rem">
                {repository.description}
              </Text>
              <Text color="fontColor">
                <Text as="span" color="gray.500" mr=".6rem">
                  Created At:
                </Text>
                {formatDate(repository.created_at)}
              </Text>

              <Text color="fontColor" noOfLines={1}>
                <Text as="span" color="gray.500" mr=".6rem">
                  Description:
                </Text>
                {repository.description}
              </Text>

              <Text color="gray.500">
                Repository link:
                <Link
                  href="https://chakra-ui.com"
                  isExternal
                  color="fontColor"
                  ml=".6rem"
                >
                  Chakra Design system <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  )
}
