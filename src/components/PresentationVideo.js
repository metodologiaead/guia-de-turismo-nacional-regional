/* eslint-disable prettier/prettier */
import React from 'react'
import { Container } from '../styles/PresentationVideoLayout'
import ReactPlayer from 'react-player/youtube'

const PresentationVideo = () => {
  return (
      <Container>
          <div>
            <ReactPlayer
            controls
            onReady={true}
            playing={true}
            url='https://www.youtube.com/watch?v=1Bs4IM-CP84'/>
          </div>
      </Container>
  )
}

export default PresentationVideo
