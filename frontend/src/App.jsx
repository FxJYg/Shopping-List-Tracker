import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/ui/Navbar'
import { useColorModeValue } from './components/ui/color-mode'
import { Toaster, toaster } from './components/ui/toaster'

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
     <Toaster>
     </Toaster>
    </Box>
  )
}

export default App
