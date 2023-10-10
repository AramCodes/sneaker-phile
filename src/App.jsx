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

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/shoes" element={<Category category="men's shoes"/>}/>
          <Route path="/jackets" element={<Category category="men's jackets"/>}/>
          <Route path="/about-us" element={<About />}/>

          {/* Route for products */}
          <Route to="/product" element={<Product />}>
              <Route to="/:productId" element={<Product />}/>
          </Route>

          {/* Route for Cart and Login/Sign up*/}
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignup />}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
