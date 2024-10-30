import { useEffect } from 'react'
import './App.css'
import Box from './components/box'
import { useState } from 'react'

function App() {
const [user, setUser] = useState("Harry");

  return (
    <>
      <h1>My React Refresh App</h1>
      <Box name = "George" />
      <Box name = "Matty" />
      <Box name = "Peter" />
      <Box name = {user} />
    </>
  )
}

export default App
