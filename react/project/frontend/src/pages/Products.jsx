import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <div>
      <h1>Products</h1>

      {product.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <h5>₹ {item.price}</h5>

          <Link to={`/product/${item.id}`}>
            View details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
