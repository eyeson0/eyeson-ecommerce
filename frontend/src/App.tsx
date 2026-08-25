import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/themeStore'
import { useEffect } from 'react'
import WelcomePage from './pages/Welcome'
import HomePage from './pages/Home'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import AccountPage from './pages/Account'
import TrackingPage from './pages/Tracking'

function App() {
  const { theme, initTheme } = useThemeStore()

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <Router>
      <div className={`${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/track/:orderId" element={<TrackingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
