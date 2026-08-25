import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EyeLoader from '../components/EyeLoader'

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
      <EyeLoader />
      <div className="mt-12 text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl font-bold tracking-wider">WELCOME TO EYESON</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Designed for those who lead, not follow.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500">
          Enter a world without limits.
        </p>
      </div>
    </div>
  )
}
