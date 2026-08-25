import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">WELCOME BACK</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            YOUR VISION STARTS HERE.
          </p>
        </div>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
          />
          <button className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold">
            SIGN IN
          </button>
        </form>
        <div className="mt-8 text-center space-y-2">
          <Link to="/signup" className="block text-sm hover:underline">
            CREATE ACCOUNT
          </Link>
          <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:underline">
            FORGOT PASSWORD?
          </a>
        </div>
      </main>
    </div>
  )
}
