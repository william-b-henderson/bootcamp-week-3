import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
