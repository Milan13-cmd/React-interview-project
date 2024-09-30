import React from 'react'
import './model.css'

const model = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || 'Model'} className='model'>
      <div className='model-content'>
         <div className='header'>
             <span className='close-btn' onClick={onClose}>&times;</span>
             <h2>{header ? header : 'Header'}</h2>
         </div>
         <div className='body'>{body ? body : <p>This is body</p>}</div>
         <div className='footer'>{footer ? footer : <p>This is footer</p>}</div>
      </div>
    </div>
  )
}

export default model