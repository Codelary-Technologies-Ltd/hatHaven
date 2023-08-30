import style from './App.module.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Category from "./pages/Category"
import CategoryItem from "./pages/CategoryItem"
import ShippingInfo from "./pages/ShippingInfo"
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ShoppingCart from './pages/ShoppingCart'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ShippingPaymentMethod from './pages/ShippingPaymentMethod';
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>    
            <Route path='/sign-up' element={<SignUp />}/>    
            <Route path='/login' element={<Login />}/>    
            <Route path='/category' element={<Category />}/>     
            <Route path='/category-item' element={<CategoryItem />}/>     
            <Route path='/shipping-info' element={<ShippingInfo />}/>     
            <Route path='/shopping-cart' element={<ShoppingCart />}/>     
            <Route path='/about-us' element={<AboutUs />}/>     
            <Route path='/contact-us' element={<ContactUs />}/>
            <Route path='/shipping-payment' element={<ShippingPaymentMethod />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App