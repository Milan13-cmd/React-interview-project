import React, { useState } from 'react'
import './tab.css'

const Tabs = ({tabsContent, onChange}) => {
  const [currentTab, setCurrentTab] = useState(0)

  function handleOnClick(getCurrnetIndex){
    setCurrentTab(getCurrnetIndex)
    onChange(getCurrnetIndex)
  }
  return (
    <div className='wrapper'>
      <div className='heading'>
          {tabsContent.map((tabItem, index) => (
            <div className={`tab-item ${currentTab === index ? 'active' : ''}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
              <span className='label'>{tabItem.label}</span>
            </div>
          ))}
      </div>
      <div className='content' style={{color:"red"}}>
        {
          tabsContent[currentTab] && tabsContent[currentTab].content
        }
      </div>
    </div>
  )
}

export default Tabs