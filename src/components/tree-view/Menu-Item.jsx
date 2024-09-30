import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'

const MenuItem= ({item}) => {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel){
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
    })
  }
  console.log(displayCurrentChildren)

   
  return (
    <li>
      <div className='menu-item'>
      <p>{item.label}</p>
      {item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
        {
          displayCurrentChildren[item.label] ? <FaMinus/> : <FaPlus/>

        }
      </span> :null}
      </div>
        {
          item && item.children && item.children.length > 0  && displayCurrentChildren[item.label] ?
          <MenuList list={item.children}/>          
          :null
        }
    </li>
  )
}

export default MenuItem