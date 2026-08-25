import Sidebar from '../components/Sidebar'

export default function Couriers() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Couriers</h1>
          <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold">
            Add Courier
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search couriers..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Phone</th>
                  <th className="text-left py-3 px-4">Vehicle</th>
                  <th className="text-left py-3 px-4">Active Deliveries</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array(8).fill(0).map((_, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="py-3 px-4 font-semibold">Courier {i + 1}</td>
                    <td className="py-3 px-4">98{i}1234567</td>
                    <td className="py-3 px-4">Motorcycle</td>
                    <td className="py-3 px-4">{5 - (i % 3)}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Online
                      </span>
                    </td>
                    <td className="py-3 px-4 space-x-2">
                      <button className="text-blue-600 hover:underline text-sm">Track</button>
                      <button className="text-red-600 hover:underline text-sm">Deactivate</button>
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
