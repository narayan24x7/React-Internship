import React, { useContext } from 'react'
import ApiItem from "./ApiItem" 
import ApiContext from '../context/ApiContext'

function ApiContainer() {
  let {apiData} = useContext(ApiContext)

  if(apiData.length === 0){
    return(
      <p>No api found</p>
    )
  }

  return (
    <div className='mt-5 bg-gray-600 p-5'>
      <h1 className='text-3xl mb-5'>Api Container</h1>
        {apiData.map((key) => (
          <ApiItem key={key.id} keyData={key}/>
        ))}
    </div>
  )
}

export default ApiContainer