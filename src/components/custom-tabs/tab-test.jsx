import React, { useState } from 'react'
import Tabs from './tabs'

const TabTest = () => {

  
  function RandomComponent(){
    return <div>Random Component</div>
  }
   
  const tabs = [
    {
      label: "tab 1",
      content: <div>This is content for tab 1</div>
    },
    {
      label: "tab 2",
      content: <div>This is content for tab 2</div>
    },
    {
      label: "tab 3",
      content: <div>This is content for tab 3</div>
    }
  ]

  function handleChange(index) {
    console.log("Active tab changed to index:", index)
  }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  )
}

export default TabTest