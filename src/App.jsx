import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
function App() {
  //const [count, setCount] = useState(0)
  const[ShowLogin, SetShowLogin] = useState(false);
  return (
    <>
    {ShowLogin?<LoginPopup SetShowLogin={SetShowLogin} />:<></>}
    <div className='app'>
      <Navbar SetShowLogin={SetShowLogin} />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/place-order" element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
