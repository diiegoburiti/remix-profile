import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix'
import React from 'react'
import type { MetaFunction } from 'remix'
import { ChakraProvider, Box, Heading, CSSReset } from '@chakra-ui/react'
import { theme } from '~/styles/theme'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export default function App() {
  return (
    <Document title="Github Profile">
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1">There was an error</Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1">
            {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

function Document({
  children,
  title
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
