import React from 'react'

function ImagePreview({imageUrl}) {
  return (
    <div>
        <h2>ImagePreview</h2>
        <img src={imageUrl} alt="preview image" width={220}/>
    </div>
  )
}

export default ImagePreview