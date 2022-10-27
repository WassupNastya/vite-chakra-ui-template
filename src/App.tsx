import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Admin } from './routes/admin'
import { Root } from './routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
