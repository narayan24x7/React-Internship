import React from 'react'
import useFetch from "../Hooks/useFetch"
import { Link, Outlet } from 'react-router-dom'

function Products() {
  const URL = "https://fakestoreapi.com/products/"
  let {data: products, error} = useFetch(URL)
  return (
    <div>
      {error && <p className='text-red-500'>{error}</p>}
      {/* <h3>Products: </h3> */}
      <div className='flex flex-wrap gap-4'>
      {products &&
        products.map((product) => (
            <li key={product.id} className='list-none p-2'>
              <Link to={`/products/${product.id}`} ><img src={product.image} alt={product.title} width={100} className='bg-blue-400 shadow-md rounded-lg p-2'/></Link>
            </li> 
        ))
      }
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Products