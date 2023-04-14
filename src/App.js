import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ProtectedRoute from './components/protectedRoute';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/contact",
    element:<Contact></Contact>
  },
  {
    path:"/about",
    element:<About></About>
  },
  {
    path:"/service",
    element:<Services></Services>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>
  },
  {
    path:"/logout",
    element:<Logout></Logout>
  }
])
function App() {
  return (
    <div className="">
      {/* <Navbar/> */}
      <RouterProvider router={router}>
     
       <Home/>
       <About/> 
       <Services/>
       <Contact/>
       <Footer/>
      </RouterProvider>
        
    </div>
  );
}

export default App;
