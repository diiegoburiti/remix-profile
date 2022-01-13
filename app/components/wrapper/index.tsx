import React from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

type WrapperProps = {
  children: React.ReactNode
} & ContainerProps

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <Container {...props} maxW="container.lg" > {children}</Container>
}
