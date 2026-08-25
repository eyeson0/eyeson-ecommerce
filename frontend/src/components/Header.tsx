import { Link } from 'react-router-dom'
import { ShoppingCart, Search, User, Heart, Menu } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useCartStore } from '../store/cartStore'
import { useState } from 'react'

export default function Header() {
  const cartItems = useCartStore((state) => state.items)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cartCount = cartItems.length

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/home" className="hover:text-gray-600 dark:hover:text-gray-400">
            HOME
          </Link>
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-400">
            NEW ARRIVALS
          </Link>
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-400">
            MEN
          </Link>
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-400">
            WOMEN
          </Link>
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-400">
            COLLECTIONS
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/home" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-bold tracking-wider">EYESON</h1>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          <button className="hover:text-gray-600 dark:hover:text-gray-400">
            <Search size={20} />
          </button>
          <Link to="/account" className="hover:text-gray-600 dark:hover:text-gray-400">
            <User size={20} />
          </Link>
          <button className="hover:text-gray-600 dark:hover:text-gray-400">
            <Heart size={20} />
          </button>
          <Link to="/cart" className="relative hover:text-gray-600 dark:hover:text-gray-400">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black dark:bg-white text-white dark:text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 p-4 space-y-4">
          <Link to="/home" className="block hover:text-gray-600 dark:hover:text-gray-400">
            HOME
          </Link>
          <Link to="/" className="block hover:text-gray-600 dark:hover:text-gray-400">
            NEW ARRIVALS
          </Link>
          <Link to="/" className="block hover:text-gray-600 dark:hover:text-gray-400">
            MEN
          </Link>
          <Link to="/" className="block hover:text-gray-600 dark:hover:text-gray-400">
            WOMEN
          </Link>
          <Link to="/" className="block hover:text-gray-600 dark:hover:text-gray-400">
            COLLECTIONS
          </Link>
        </nav>
      )}
    </header>
  )
}
