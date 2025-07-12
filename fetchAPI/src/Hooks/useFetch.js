import { useState, useEffect } from "react"

function useFetch(url) {
    let [data, setData] = useState(null)
    let [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true
        fetch(url)
        .then(res => res.json())
        .then(data_json => {
            if(isMounted){
                setData(data_json)
            }
        })
        .catch((err) => {
            if(isMounted){
                // setError("Data not found.", err)
                setError(`Data not found. Error: ${err}`)
            }
        })

        // let setIsMountedFalse = () => {
        //     isMounted = false
        //     return isMounted
        // }

        return () => {isMounted = false}
    }, [url])

    return {data, error}
}

export default useFetch