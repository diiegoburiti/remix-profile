import { Text, Link } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Text as="footer" color="fontColor" textAlign="center">
      Made with
      <Link
        href="https://remix.run"
        target="_blank"
        rel="noreferrer"
        color="borderColor"
        ml="0.2rem"
      >
        Remix.run
      </Link>
    </Text>
  )
}
