import Header from '../components/Header'

export default function Checkout() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">CHECKOUT</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">DELIVERY INFORMATION</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              />
            </form>
          </div>
          <button className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold">
            PLACE ORDER
          </button>
        </div>
      </main>
    </div>
  )
}
