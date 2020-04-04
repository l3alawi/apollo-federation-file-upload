import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FILE_SERVICE = gql`
  {
    helloWorld
  }
`

function App() {
  const { loading, error, data } = useQuery(FILE_SERVICE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  if (data) {
    const { helloWorld } = data
    return (
      <div>
        <h1>{helloWorld}</h1>
      </div>
    )
  }
}

export default App
