import React from 'react'
import AddProduct from '../components/AddProduct'
import useAddProduct from '../Hooks/useAddProduct'

function AddProductPage() {
    const URL = "https://fakestoreapi.com/products/"
    let { addProduct, formData, error } = useAddProduct(URL)

    return (
        <div>
            <h2>AddProductPage</h2>

            <AddProduct onSubmit={addProduct} />

            {error && <p>{error}</p>}
            {formData && (
                <div>
                    <pre>{JSON.stringify(formData, null, 4)}</pre>
                </div>
            )}
        </div>
    )
}
export default AddProductPage