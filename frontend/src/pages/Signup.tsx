import Header from '../components/Header'

export default function Signup() {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">CREATE ACCOUNT</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            JOIN THE EYESON WORLD.
          </p>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="FULL NAME"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <input
            type="tel"
            placeholder="MOBILE NUMBER"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <button className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold">
            CREATE ACCOUNT
          </button>
        </form>
      </main>
    </div>
  )
}
