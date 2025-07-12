import React, { useCallback, useState } from 'react'

function useAddProduct(url) {

    let [formData, setFormData] = useState(null)
    let [error, setError] = useState("")

    let addProduct = useCallback(async (productData) => {
        setFormData(null)
        setError("")
        try{
        
        let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: { "Content-Type": "application/json" }
});

        let resData = await res.json();

        let fullProduct = { id: resData.id,...productData };
        setFormData(fullProduct); 

        }catch(error){
            setError(error.message)
        }  
    }, [])
  return {addProduct, formData, error}
}
export default useAddProduct