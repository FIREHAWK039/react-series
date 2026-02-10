import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import User from './components/User/User.jsx'
import { Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contacts", 
//         element: <Contacts />
//       },
//       {
//         path: "user/:userid", 
//         element: <User />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter( 
  createRoutesFromElements( 
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route path='user/:Userid' element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
