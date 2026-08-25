import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Orders', value: '1,234', change: '+12%' },
            { label: 'Revenue', value: 'NPR 5.2M', change: '+8%' },
            { label: 'Customers', value: '456', change: '+5%' },
            { label: 'Products', value: '89', change: '0%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4">EYS-1000{i}</td>
                    <td className="py-3 px-4">Customer {i + 1}</td>
                    <td className="py-3 px-4">NPR {(i + 1) * 1000}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Delivered
                      </span>
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
