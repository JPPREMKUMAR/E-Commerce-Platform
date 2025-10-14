import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"



import Navbar from "./components/Navbar"
import MainPage from "./pages/MainPage"
import Home from "./pages/Home"
import PersonalCare from "./pages/PersonalCare"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import GenZ from "./pages/GenZ"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Dashboard from "./pages/Dashboard"
import Coupons from "./pages/Coupons"
import Profile from "./pages/Profile"
import SavedCards from "./pages/SavedCards"
import SavedVpa from "./pages/SavedVpa"
import Address from "./pages/Address"
import ProductDetails from "./pages/ProductDetails"
import Login from './pages/Login'
import SignUp from "./pages/SignUp"
import DeleteAccount from "./pages/DeleteAccount"


function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/shop/home-living" element={<Home />} />
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/kids" element={< Kids />} />
        <Route path="/personal-care" element={< PersonalCare />} />
        <Route path="/genz-both" element={<GenZ />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/my/orders" element={< Orders />} />
        <Route path="/my/dashboard" element={<Dashboard />} />
        <Route path="/my/coupons" element={< Coupons />} />
        <Route path="/my/profile" element={<Profile />} />
        <Route path="/my/saved-cards" element={<SavedCards />} />
        <Route path="/my/saved-vpa" element={<SavedVpa />} />
        <Route path="/my/address" element={<Address />} />
        <Route path="/my/delete-account" element={<DeleteAccount />} />
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>


    </>
  )
}

export default App
