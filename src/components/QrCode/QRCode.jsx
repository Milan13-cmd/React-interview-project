import React, { useState } from 'react'
import {QRCode} from 'react-qr-code'

const QRCodeGenerator = ({name}) => {
  
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')


  function handleQRcode() {
    setQrCode(input);
    setInput ('')
  }
  return (
    <div>
      <h1>QRCode Generator</h1>
      <div>
        <input
         name={name}
         type="text"
         placeholder='Enter a value'
         onChange={(e) => setInput(e.target.value)}
         value={input}
        />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleQRcode}>Generate</button>
      </div>
         <QRCode
          id='qr-code'
          value={qrCode}
         />
    </div>
  )
}

export default QRCodeGenerator;