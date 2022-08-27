import './slider.css';
import React, { useState, useEffect } from 'react'
import {dataSlider} from '../../data/dataSlider'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    const [selected, setSelected] = useState(0)
    const tLength = dataSlider.length
    const timeoutRef = React.useRef(null);
    
const delay = 5000
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true)
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSelected((prevIndex) =>
          prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1 
        ),
      delay
    ); return () => {};
  }, [selected]);
  return (
    <div className='testimonials'>
      {show && <div className='vid'  onClick={handleClose}>
      <video width='750' height='500'>
        <source
          src="https://youtu.be/f4O03OGp8s4"
          type="video/mp4"
        />
        </video>
        
        
      </div>}
      <div className="left-t">
       <span>
        {dataSlider[selected].review}
       </span>
       <span>
        {dataSlider[selected].name}
        </span>{" "}
        <span >
           {dataSlider[selected].status}</span>
           <div className='play'><span >
           {dataSlider[selected].learn}</span> <span onClick={handleShow} >
           {dataSlider[selected].play}</span>
           </div>
      </div>

     
      <div className="right-t">
        
        
    <img src={dataSlider[selected].image} alt="" />
    <div className="arrows">
        <div ><FaArrowLeft
        style={{size:'20px', color:'white', cursor:'grab'}}
        onClick={() => {
            selected === 0
            ? setSelected(0)
            : setSelected((prev) => prev - 1)
        }}
         /></div><div className='line'></div><FaArrowRight
         style={{size:'20px', color:'white', cursor:'grab'}}
        onClick={() => {
            selected === tLength - 1
            ? setSelected(0)
            : setSelected((prev) => prev + 1)
        }}
          />
    </div>
      </div>
    </div>
  )
}

export default Slider
