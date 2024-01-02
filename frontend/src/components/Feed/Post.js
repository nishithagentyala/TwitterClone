import React from 'react'
import { Avatar } from '@mui/material'
import { MdVerifiedUser } from 'react-icons/md'
import { IoIosChatbubbles } from 'react-icons/io'
import { IoIosRepeat } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa6'
import { MdPublish } from 'react-icons/md'

import './Post.css'
const Post = ({
  displayName,
  username,
  verified,
  timeStamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className='post'>
      <div className='postAvatar'>
        <Avatar src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D' />
      </div>
      <div className='postBody'>
        <div className='postHeader'>
          <div className='postHeaderText'>
            <h3>
              Nishu
              <span>
                <MdVerifiedUser className='postBadge' />
                @Nishitha
              </span>
            </h3>
          </div>
          <div className='postHeaderDesc'>
            <p>OMG! look at this</p>
          </div>
        </div>
        <img
          src='https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif'
          alt='image/gif'
        />
        <div className='postFooter'>
          <IoIosChatbubbles />
          <IoIosRepeat />
          <FaRegHeart />
          <MdPublish />
        </div>
      </div>
    </div>
  )
}

export default Post
