import React from 'react'
import { Avatar, Button } from '@mui/material'
const TweetBox = () => {
  return (
    <div>
      <form>
        <div className='twitterInput'>
          <Avatar src='https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D' />
          <input placeholder='What s happening' type='text' />
        </div>
        <input placeholder='Enter image URL' type='text' id='image' />

        <Button id='tweetbtn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
