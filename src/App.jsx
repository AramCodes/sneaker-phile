import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css'
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main/Main'
import Category from './pages/Category/Category'
import About from "./pages/About/About"
import Cart from "./pages/Cart/Cart"
import LoginSignup from "./pages/LoginSignUp/LoginSignup"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import shoeBanner from './assets/images/shoes-banner.jpg'
import jacketBanner from './assets/images/jacket-banner.jpg'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/shoes" element={<Category category="Shoes" banner={shoeBanner} />} />
          <Route path="/jackets" element={<Category category="Jackets" banner={jacketBanner} />}/>
          <Route path="/about-us" element={<About />}/>

          {/* Route for products */}
          <Route path="/product" element = {<Product />}>
            <Route path=':productId' element = {<Product />}/>
          </Route>

          {/* Route for Cart and Login/Sign up*/}
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignup />}/>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
