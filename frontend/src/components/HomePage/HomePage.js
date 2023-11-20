import React from 'react'
import SideBar from '../SideBar/SideBar'
import Widget from '../Widgets/Widget'
import Feed from './Feed'
import './Feed.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <SideBar />
      <Feed />
      <Widget />
    </div>
  )
}

export default HomePage
