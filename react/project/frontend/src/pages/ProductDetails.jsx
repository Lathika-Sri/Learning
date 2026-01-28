import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <h2>₹ {product.price}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails
