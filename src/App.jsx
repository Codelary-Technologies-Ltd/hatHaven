import style from './App.module.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Category from "./pages/Category"
import AboutUs from './pages/AboutUs';
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
            <Route path='/category' element={<Category />}/>     
            <Route path='/about-us' element={<AboutUs />}/>     
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App