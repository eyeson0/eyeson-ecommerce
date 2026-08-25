import Header from '../components/Header'
import { useParams } from 'react-router-dom'

export default function Product() {
  const { slug } = useParams()

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1>Product: {slug}</h1>
        <p>Product details page coming soon...</p>
      </main>
    </div>
  )
}
