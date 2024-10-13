import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'
// const router = createBrowserRouter([
// {
//   path : '/',
//   element: <Layout/>,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }
//   ]
// }


// ])
//2nd way to do this
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      
      <Route path='' element={<Home />}  />
      <Route path='about' element={<About />}  />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    

      </Route> 
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
