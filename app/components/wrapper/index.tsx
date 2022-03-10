import React from 'react'
import { Container, ContainerProps, ScaleFade } from '@chakra-ui/react'

type WrapperProps = {
  children: React.ReactNode
} & ContainerProps

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Container {...props} maxW="container.lg" h="100vh">
        {children}
      </Container>
    </ScaleFade>
  )
}
