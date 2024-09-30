import React, { useState } from 'react'
import Model from './model'

const modelTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleToggleModelPopup(){
    setIsOpen(!isOpen)
  }

  function onClose(){
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open Model Popup</button>
      {isOpen && (
        <Model 
          onClose={onClose}
          header="Test Header"
          body={<p>This is the body content</p>}
          footer='This is the footer content'
        />
      )}
    </div>
  )
}

export default modelTest