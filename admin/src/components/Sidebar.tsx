import { Link } from 'react-router-dom'
import { BarChart3, Package, Users, Truck, LogOut } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">EYESON</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Admin Panel</p>
      </div>

      <nav className="p-6 space-y-4">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <BarChart3 size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/orders"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Package size={20} />
          <span>Orders</span>
        </Link>
        <Link
          to="/products"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Package size={20} />
          <span>Products</span>
        </Link>
        <Link
          to="/customers"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Users size={20} />
          <span>Customers</span>
        </Link>
        <Link
          to="/couriers"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Truck size={20} />
          <span>Couriers</span>
        </Link>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
