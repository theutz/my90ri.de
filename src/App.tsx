import React from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>My 90 Ride</h1>
    </ApolloProvider>
  )
}

export default App
