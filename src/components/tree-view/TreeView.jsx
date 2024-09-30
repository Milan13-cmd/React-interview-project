import React from 'react'
import './style.css'
import MenuList from './MenuList'

const TreeView = ({menus =[]}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView