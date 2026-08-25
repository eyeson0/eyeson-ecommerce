import Header from '../components/Header'
import { useParams } from 'react-router-dom'

export default function Tracking() {
  const { orderId } = useParams()

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">TRACK YOUR ORDER</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Order: {orderId}</p>

        <div className="space-y-4">
          {[
            { status: 'ORDER PLACED', completed: true },
            { status: 'PAYMENT CONFIRMED', completed: true },
            { status: 'PROCESSING', completed: true },
            { status: 'PACKED', completed: false },
            { status: 'IN TRANSIT', completed: false },
            { status: 'OUT FOR DELIVERY', completed: false },
            { status: 'DELIVERED', completed: false },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.completed
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.completed ? '✓' : '○'}
              </div>
              <div>
                <p className="font-bold">{item.status}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Today, 8:30 AM
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
