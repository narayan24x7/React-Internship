import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="flex flex-wrap justify-between items-center p-4" >
                <div className="logo text-2xl text-orange-500 font-semibold">Logo</div>

                <div className="flex flex-wrap gap-4 list-none">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "text-orange-700 underline" : "text-gray-700"}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "text-orange-700 underline" : "text-gray-700"}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? "text-orange-700 underline" : "text-gray-700"}>Contact</NavLink></li>
                    <li><NavLink to="/products" className={({isActive}) => isActive ? "text-orange-700 underline" : "text-gray-700"}>Products</NavLink></li>
                    <li><NavLink to="/addproduct" className={({isActive}) => isActive ? "text-orange-700 underline" : "text-gray-700"}>Add Product</NavLink></li>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header