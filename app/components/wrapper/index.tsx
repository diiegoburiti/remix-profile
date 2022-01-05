import React from 'react'
import { Container } from '@chakra-ui/react'

type WrapperProps = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Container maxW="container.lg"> {children}</Container>
}
