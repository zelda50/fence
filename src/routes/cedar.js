import  Navbar  from '../components/Navbar';
import React from 'react';
import Hero from '../components/Hero';
import cedarImg from '../assets/cedar.jpg'


const Cedar = () => {
  return (
    <>
    <Navbar/>
     <Hero
      cName="hero-about"
      className="aImg"
      heroImg={cedarImg}
      title="Cedar Fences"
      url="/cedar"
     />
     
    </>
  )
}

export default Cedar;
