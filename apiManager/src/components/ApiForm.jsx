import React, { useContext, useState } from 'react'
import ApiContext from '../context/ApiContext';

function ApiForm() {
    let {addApiKey} = useContext(ApiContext)
    let [label, setLabel] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault();
        addApiKey(label)
        console.log(`key generate: ${label}`);
        setLabel('')
    }
    return (
        <div className='bg-gray-600 mt-5'>
            <form 
            className='p-5 space-y-4 flex justify-center item-center space-x-3' 
            onSubmit={handelSubmit}>
                <div className='flex justify-center item-center space-x-3'>
                    <label htmlFor="api_label">Api Key Name: </label>
                    <input type="text"
                        name='api_label'
                        className='border-2 border-solid outline-none'
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        required />
                </div>
                <div>
                    <button 
                    className='outline-none bg-orange-400 rounded-lg p-2'
                    >Generate API Key</button>
                </div>
            </form>
        </div>
    )
}

export default ApiForm