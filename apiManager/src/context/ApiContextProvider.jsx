import React, { useEffect, useState } from 'react'
import ApiContext from './ApiContext';

function ApiContextProvider({children}) {

    /*
    1. Add API Key
    2. Edit API Key
    3. Delete API Key
    4. Copy API Key
    5. Generate API Key
    */
   
    let [apiData, setApiData] = useState([])
    // localStorage

    // Get Default Data from Browser
        useEffect(() => {
            let defaultData = JSON.parse(localStorage.getItem('apiData')) || [];
            setApiData(defaultData)
        }, [])

    // Update Data in Browser
        useEffect(() => {
            localStorage.setItem('apiData', JSON.stringify(apiData))
        }, [apiData])

    // Add API
        const addApiKey = (apiLabel) => {
            let newApiKey = {
                id: Date.now(),
                label: apiLabel || 'None',
                key: generateApiKey(), 
            }
            setApiData((prev) =>  ([...prev, newApiKey]))
        }

    // Edit API
        const editApiKey = (id, newApiLabel) => {
            setApiData((prev) => (prev.map((key) => 
                key.id === id ? {...key, label: newApiLabel} : key
            )))
        }

    // Delete API
        const deleteApiKey = (id) => (
            setApiData((prev) => prev.filter((key) => (key.id !== id)))
        )

    // Copy API Key
        const copyApiKey = async (key) => {
            try {
                await navigator.clipboard.writeText(key);
                alert("API Key copied to clipboard!");
            } catch (error) {
                alert("Failed to copy API Key.");
            }
        }

    // Generate API
        const generateApiKey = () => {
            return(
                Math.random().toString(36).substring(2,20) + "+" + Math.random().toString(36).substring(2,20) + "_" + Math.random().toString(36).substring(2,20)
            )
        }

  return (
    <ApiContext.Provider value={{apiData, addApiKey, editApiKey, deleteApiKey, copyApiKey}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider;
