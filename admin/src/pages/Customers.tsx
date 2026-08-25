import Sidebar from '../components/Sidebar'

export default function Customers() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Customers</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Phone</th>
                  <th className="text-left py-3 px-4">Orders</th>
                  <th className="text-left py-3 px-4">Joined</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array(10).fill(0).map((_, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="py-3 px-4 font-semibold">Customer {i + 1}</td>
                    <td className="py-3 px-4">customer{i}@email.com</td>
                    <td className="py-3 px-4">98{i}1234567</td>
                    <td className="py-3 px-4">{i + 1}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {Math.floor(Math.random() * 12)} months ago
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
