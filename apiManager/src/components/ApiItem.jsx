import React, { useContext, useState } from 'react'
import ApiContext from '../context/ApiContext'

function ApiItem({ keyData }) {
  let [newLabel, setNewLabel] = useState(keyData.label)
  let [editMode, setEditMode] = useState(false)

  let { editApiKey, deleteApiKey, copyApiKey } = useContext(ApiContext) // ✅ Include copyApiKey

  const handelEdit = () => {
    if (editMode) {
      editApiKey(keyData.id, newLabel)
    }
    setEditMode(!editMode)
  }

  return (
    <div className='flex justify-center items-center space-x-2 w-auto'>

      <div className='bg-red-500 p-2 border-2 rounded-md w-40'>
        {editMode ? (
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            className="w-full bg-white text-black px-2"
          />
        ) : (
          <p>{keyData.label}</p>
        )}
      </div>

      <div className='bg-red-500 p-2 border-2 rounded-md w-96 overflow-x-auto'>
        {keyData.key}
      </div>

      <button
        className='bg-red-500 p-2 border-2 rounded-md w-32'
        type='button'
        onClick={handelEdit}
      >
        {editMode ? 'Save' : 'Edit'}
      </button>

      <button
        className='bg-red-500 p-2 border-2 rounded-md w-32'
        type='button'
        onClick={() => deleteApiKey(keyData.id)}
      >
        Delete
      </button>

      {/* ✅ Copy Button */}
      <button
        className='bg-red-500 p-2 border-2 rounded-md w-32'
        type='button'
        onClick={() => copyApiKey(keyData.key)}
      >
        Copy
      </button>

    </div>
  )
}

export default ApiItem
