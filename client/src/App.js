import {createBrowserRouter,RouterProvider,Route,Outlet}from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import Single from './pages/Single'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Write from './pages/Write';
import './style.scss'
const Layout =()=>{
  return(
    <>
       <Navbar />
       <Outlet />
      <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
  
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/post/:id',
        element:<Single/>
      },
      {
        path:'/write',
        element:<Write/>
      },
    ]
  },
  
])
function App() {

  return (
    <div className='app'>
         <div className='container'>
         <RouterProvider router={router} />
         </div>
    </div>
  );
}
 

export default App;
