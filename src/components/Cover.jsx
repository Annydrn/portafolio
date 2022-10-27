import React from 'react'
import "../styles/cover.css"
import coverVideo from "/public/video/coverVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Andrea Durán C</h1>
        <p>Developer FrontEnd | Programadora | Maquetadora Web </p>

    </div>
  )
}

export default Cover