import style from './App.module.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Category from "./pages/Category"
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ShoppingCart from './pages/ShoppingCart'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>    
            <Route path='/sign-up' element={<SignUp />}/>    
            <Route path='/login' element={<Login />}/>    
            <Route path='/category' element={<Category />}/>     
            <Route path='/shopping-cart' element={<ShoppingCart />}/>     
            <Route path='/about-us' element={<AboutUs />}/>     
            <Route path='/contact-us' element={<ContactUs />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App