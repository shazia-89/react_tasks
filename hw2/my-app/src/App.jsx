import './App.css'
import Product from './components/Product.jsx'

function App() {
  const products = [
    {
      title: "phone",
      price: 200000,
      inStock: true,
      description: "without discount",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    },
    {
      title: "phone 1",
      price: 200000,
      inStock: true,
      description: "without discount",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    },
    {
      title: "phone 2",
      price: 200000,
      inStock: true,
      description: "without discount",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    }
  ]

  return (
    <>
      {products.map(product => (
        <Product
          key={product.title}
          title={product.title}
          price={product.price}
          inStock={product.inStock}
          description={product.description}
          rating={product.rating}
          tags={product.tags}
        />
      ))}
    </>
  )
}

export default App