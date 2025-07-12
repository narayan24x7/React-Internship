import react from 'react'
import "./Footer.css"

function Footer({company,year}) {
  return (
    <div className='bg-red-50 shadow-md text-center p-2'>
        &copy;{company}|{year} All Rights Reserved.
        </div>
  )
}

export default Footer