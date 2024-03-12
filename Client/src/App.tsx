
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Services from './components/Services'
import Contact from './components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)

function App() {


  return (
    <RouterProvider router={router}>

    </RouterProvider>
  
  )
}

export default App
