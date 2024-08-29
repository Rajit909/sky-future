import React from 'react'
import { YouTubeEmbed } from '@next/third-parties/google'
import ReactPlayer from 'react-player';




const VideoPlayer = ({ videoUrl, poster }) => {
  console.log("video url in videoplayer:", videoUrl);
  return (
    <div className='flex justify-center flex-col ml-2'>
      <YouTubeEmbed 
      videoid={videoUrl}
      height={300} 
      poster={poster}
       />
       {/* <ReactPlayer 
       url={`https://www.youtube.com/watch?v=${videoUrl}`} 
       poster={poster}
       width="100%" height="500px" controls /> */}
        {/* </ReactPlayer> */}
    </div>
  )
}

export default VideoPlayer