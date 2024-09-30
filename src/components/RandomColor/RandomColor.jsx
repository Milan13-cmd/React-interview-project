import React, { useState, useEffect } from 'react'

export const RandomColor = () => {
  
  const [typeofColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  useEffect(() => {
    if(typeofColor === "hex") handleCreateRandomHex()
    else handleCreateRandomRgb()  
  }, [typeofColor])
  

  function randomUtility(length){
    return Math.floor(Math.random () * length);
  }

  function handleCreateRandomHex(){
    const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#";

    for(let i=0; i<6; i ++){
      hexColor += hex[randomUtility(hex.length)];
    }
    console.log(hexColor)
    setColor(hexColor);
  }

  function handleCreateRandomRgb(){
     const r = randomUtility(256)
     const g = randomUtility(256)
     const b = randomUtility(256)
     const rgbColor = `rgb(${r},${g},${b})`;
     setColor(rgbColor)
     console.log(rgbColor)
  }
  return (
    <div style={{
       width:'100vw',
       height:'100vh',
       background: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create a Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeofColor=== 'hex' ? handleCreateRandomHex : handleCreateRandomRgb}>Generate Random Color</button>

      <div
      style={{
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"60px"
      }} 
      >
        <h1>{typeofColor === 'hex' ? "Hex Color" : "RGB Color"}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  )
}
