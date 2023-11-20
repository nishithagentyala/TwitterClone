import React from 'react'
import './SideBar.css'
const SideBarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sideOption ${active && 'sideOption-active'}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  )
}

export default SideBarOption
