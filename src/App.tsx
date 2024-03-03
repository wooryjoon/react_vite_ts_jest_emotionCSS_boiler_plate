import { RouterProvider } from 'react-router-dom'

import hi from '@util/test'

import router from './route/router'

function App() {
  hi()
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
