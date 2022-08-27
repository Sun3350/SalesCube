import React from 'react'
import './joker.css'
import img1 from '../../Images/Asset-60.png'
import img2 from '../../Images/Purple-shop.png'
import img3 from '../../Images/PURIT.png'
import img4 from '../../Images/Mixta-white.png'
import img5 from '../../Images/logom.png'
import img6 from '../../Images/CSP.png'
import img7 from '../../Images/Digi-Web-2.jpg'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
const Joker = () => {
  const [onHover, setOnHover] = useState(false)
  const [onHovers, setOnHovers] = useState(false)

  const handleHover = () => {setOnHover(true)
    };
  const handleOutHover = () => { setOnHover(false) }
  const handleHovers = () => {setOnHovers(true)
  };
const handleOutHovers = () => { setOnHovers(false) }
  return (
    <div className='joker-container'>
      <div className='middle'>
       <div className='jokers-box'>
        <div className='img1' onMouseOver={handleHovers} onMouseOut={handleOutHovers} >
          {onHovers && <div className='top' style={{backgroundColor: 'brown', opacity: '0.7'}}>
            <img style={{width:'80px' , height: '60px'}} src={img1} alt="" />
                <div className='title'>Gajimare</div>
                <div className='text'>BRANDING, DIGITAL</div>
          </div>}
           </div> 
        <div className='img2' onMouseEnter={handleHover} onMouseLeave={handleOutHover} >
          {onHover && <div className='top' style={{backgroundColor: 'purple', opacity: '0.7'}}>
            <img style={{width:'250px' , height: '60px'}} src={img2} alt="" />
                <div className='title'>Purple</div>
                <div className='text'>DIGITAL,MEDIA,PHOTOGRAPHY</div>
          </div>}
           </div> 
        <div className='img3'>
          <div className='top' style={{backgroundColor: 'green', opacity: '0.7'}}>
            <img style={{width:'60px' , height: '50px'}} src={img3} alt="" />
                <div className='title'>Purit</div>
                <div className='text'>BRANDING,DIGITAL,MEDIA,PRINT,VIDEO</div>
          </div>
           </div> 
        <div className='img4'>
          <div className='top' style={{backgroundColor: 'red', opacity: '0.7'}}>
            <img style={{width:'100px' , height: '50px'}} src={img4} alt="" />
                <div className='title'>Mixta Africa</div>
                <div className='text'>BRANDING,DIGITAL</div>
          </div>
           </div> 
        <div className='img5'>
          <div className='top' style={{backgroundColor: 'blue', opacity: '0.7'}}>
            <img style={{width:'60px' , height: '50px'}}  src={img5} alt="" />
                <div className='title'>Gossy</div>
                <div className='text'>DIGITAL,VIDEO</div>
          </div>
           </div> 
        <div className='img6'>
          <div className='top' style={{backgroundColor: 'red', opacity: '0.7'}}>
            <img style={{width:'150px' , height: '80px'}} src={img6} alt="" />
                <div className='title'>CrusaderSterling Pensions</div>
                <div className='text'>DIGITAL,WEB</div>
          </div>
           </div> 
  
       </div>

      <div className='testimonial'>
      {testimonialsData.map((program) =>
            (
            <div className="categories">
                {program.image}
                <span>{program.name}</span>
                <span>{program.review}</span>
                <span>{program.status}</span>
            </div>
            )
            )}</div>
            <div className='Ref'>
              <div className='image'>
                <img src={img7} alt="" />
              </div>
              <div className='ref'>

                <div className='texts'>
              <div >The Reef</div>
              <div>At the Reef, we all share one thing in common – killer instinct. Each shark is given the liberty to thrive and 
                express their unique characteristics. </div>
              <div>Our differences are our greatest strength with a 
                collective ruthless determination to win. </div>
              <div>Do you think like a shark?</div>
             <div> <button className='btnn'>JOIN THE REEF</button></div>
              </div>
              </div>
            </div>
            
       </div>
    </div>
  )
}

export default Joker
