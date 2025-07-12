import React from 'react'
import useFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  let {id} = useParams()
  const URL = `https://fakestoreapi.com/products/${id}`
  let {data: product, error} = useFetch(URL)
  return (
    <div>
      {error && <p>{error}</p>}
      {product && 
        <table border='1'>
          <tr>
            <td>ID</td>
            <td>{product.id}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{product.title}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td>Product Image</td>
            <td><img src={product.image} alt={product.title} width={120}/></td>
          </tr>
        </table>
      }
    </div>
  )
}

export default ProductDetails