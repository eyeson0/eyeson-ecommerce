import Header from '../components/Header'
import { useCartStore } from '../store/cartStore'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, getTotalPrice, removeItem } = useCartStore()

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              YOUR CART IS WAITING
            </p>
            <Link
              to="/home"
              className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold"
            >
              CONTINUE SHOPPING →
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-8 pb-8 border-b border-gray-200 dark:border-gray-800"
              >
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-sm" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Color: {item.color} | Size: {item.size}
                  </p>
                  <p className="font-semibold mb-4">NPR {item.price}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    REMOVE
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">Qty: {item.quantity}</p>
                  <p className="text-lg font-bold mt-2">
                    NPR {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-8">
              <div>
                <p className="text-lg font-bold mb-4">
                  TOTAL: NPR {getTotalPrice()}
                </p>
                <Link
                  to="/checkout"
                  className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold"
                >
                  CHECKOUT →
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
