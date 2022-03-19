import {
  Box,
  Image,
  List,
  ListItem,
  Flex,
  Grid,
  GridItem,
  Badge,
  Text,
  Link,
  Heading,
  Button
} from '@chakra-ui/react'
import {
  InfoIcon as Icon,
  ExternalLinkIcon,
  ArrowBackIcon
} from '@chakra-ui/icons'
import { UserTypes } from '~/services/github'
import { Wrapper } from '~/components/wrapper'
import { InfoIcon } from '~/components/InfoIcon'
import { formatDate } from '~/utils/date'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const repositoriesArrayLength = repositories.length
  const [repositoriesPerClick, setRepositoriesPerClick] = useState(6)
  const disabledButton = repositoriesArrayLength <= repositoriesPerClick

  const handleLoadMoreRepositories = () => {
    setRepositoriesPerClick((prevNumber) => prevNumber + 6)
  }

  const arrayOfRepositories = repositories.slice(0, repositoriesPerClick)

  const handleToThePreviousPage = () => {
    return navigate(-1)
  }

  return (
    <Wrapper flexDir="column">
      <Flex justifyContent="space-evenly" alignItems="center">
        <Button
          aria-label="button go to back to previous page"
          onClick={handleToThePreviousPage}
          display="flex"
          alignSelf="baseline"
          border="2px"
          borderColor="borderColor"
          _hover={{
            bg: 'borderColor',
            color: 'fontColor',
            borderColor: 'fontColor'
          }}
        >
          <ArrowBackIcon w={8} h={8} aria />
        </Button>
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

            <ListItem>
              <Link
                href={`https://gist.github.com/${login}`}
                isExternal
                color="fontColor"
              >
                <Flex alignItems="center">
                  <InfoIcon />
                  <span>{name || login} gists</span>
                  <ExternalLinkIcon ml="0.6rem" color="borderColor" />
                </Flex>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>

      <Heading color="fontColor" textAlign="center" my="1.6rem">
        Repositories
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {arrayOfRepositories.map((repository) => (
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

              <Link href={repository.clone_url} isExternal color="fontColor">
                <Flex alignItems="center">
                  <span>Repository link</span>
                  <ExternalLinkIcon ml="0.6rem" color="borderColor" />
                </Flex>
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Button
        onClick={handleLoadMoreRepositories}
        disabled={disabledButton}
        my="1.6rem"
        mx="auto"
        display="block"
        backgroundColor="borderColor"
        color="fontColor"
        _hover={{ bg: 'bg' }}
      >
        Load More
      </Button>
    </Wrapper>
  )
}
