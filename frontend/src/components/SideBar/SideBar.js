import React from 'react'
import './SideBar.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import TagOutlinedIcon from '@mui/icons-material/TagOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ListAltIcon from '@mui/icons-material/ListAlt'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone'
import SideBarOption from './SideBarOption'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className='twitter' />
      <SideBarOption text='Home' Icon={HouseRoundedIcon} />
      <SideBarOption text='Explore' Icon={TagOutlinedIcon} />
      <SideBarOption text='Notifications' Icon={NotificationsOutlinedIcon} />
      <SideBarOption text='Messages' Icon={MailOutlineOutlinedIcon} />
      <SideBarOption text='Bookmarks' Icon={BookmarkBorderOutlinedIcon} />
      <SideBarOption text='Lists' Icon={ListAltIcon} />
      <SideBarOption text='Profile' Icon={AccountCircleOutlinedIcon} />
      <SideBarOption text='More' Icon={MoreHorizTwoToneIcon} />
      <button>Tweet</button>
    </div>
  )
}

export default SideBar
