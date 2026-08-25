import Header from '../components/Header'
import { useThemeStore } from '../store/themeStore'

export default function Home() {
  const { theme } = useThemeStore()

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-gray-600 dark:text-gray-400 mb-6">
              · MAIN COLLECTION ·
            </p>
            <h1 className="text-7xl font-bold tracking-wider mb-4">LIMITLESS.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              DESIGNED FOR THOSE WHO LEAD, NOT FOLLOW.
            </p>
          </div>

          {/* Hero Images */}
          <div className="grid grid-cols-3 gap-8 items-center my-16">
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-sm"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-sm"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-sm"></div>
          </div>

          {/* Product Info */}
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">RACING CROSS TEE</h3>
              <p className="text-gray-600 dark:text-gray-400">OVERSIZED FIT</p>
              <p className="text-gray-600 dark:text-gray-400">PREMIUM 100% COTTON</p>
              <button className="mt-8 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-80 transition-opacity">
                SHOP NOW →
              </button>
            </div>
            <div className="text-right space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                FABRIC: TENSIL ROMA
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                MODEL IS 5'7 WEARING SIZE L
              </p>
              <div className="flex justify-end gap-3 mt-8">
                <div className="w-6 h-6 bg-black dark:bg-white rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-4xl font-bold tracking-wider mb-12 text-center">
            EXPLORE COLLECTIONS
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {['T-SHIRTS', 'HOODIES', 'JACKETS', 'JOGGERS', 'ACCESSORIES'].map((category) => (
              <div
                key={category}
                className="h-48 bg-gray-200 dark:bg-gray-800 rounded-sm flex flex-col items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
              >
                <h3 className="font-bold text-center mb-4">{category}</h3>
                <p className="text-sm">VIEW ALL →</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
