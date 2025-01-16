import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTER from './router/router'
const routes = createBrowserRouter(ROUTER)

function App() {

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App