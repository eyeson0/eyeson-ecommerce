import Sidebar from '../components/Sidebar'

export default function Orders() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Orders</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">Order Number</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Payment</th>
                  <th className="text-left py-3 px-4">Delivery</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array(10).fill(0).map((_, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="py-3 px-4 font-semibold">EYS-{10000 + i}</td>
                    <td className="py-3 px-4">Customer {i + 1}</td>
                    <td className="py-3 px-4">NPR {(i + 1) * 1500}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Confirmed
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        In Transit
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                      Today
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:underline text-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
