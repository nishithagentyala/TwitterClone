import React from 'react'
import './SideBar.css'
const SideBarOption = ({ text, Icon }) => {
  return (
    <div className='sideOption'>
      <Icon />
      <h3>{text}</h3>
    </div>
  )
}

export default SideBarOption
