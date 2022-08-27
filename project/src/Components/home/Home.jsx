import React from 'react'
import './home.css'
import vid from '../../Images/video.mp4'
import Slider from '../slider/Slider'
const Home = () => {
    
  return (
    <div className='background'>
     <video loop autoPlay >
        <source
          src={vid}
          type="video/mp4"
        />
        </video>
        <div className='over-flow'>
        <div className='social-media'>
          <div className='social'>
                <p>TW</p>
                <p>IG</p>
                <p>LN</p>
                <p>BE</p>
                </div>
            </div>
            <div className='slide'>
              <Slider/>
            </div>
  </div>
        </div>
        
    
  )
}

export default Home
