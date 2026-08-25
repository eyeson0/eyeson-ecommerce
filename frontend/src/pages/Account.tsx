import Header from '../components/Header'

export default function Account() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">MY ACCOUNT</h1>
        <div className="grid grid-cols-4 gap-6">
          {[
            { title: 'PROFILE', icon: '👤' },
            { title: 'MY ORDERS', icon: '📦' },
            { title: 'WISHLIST', icon: '❤️' },
            { title: 'ADDRESSES', icon: '📍' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
