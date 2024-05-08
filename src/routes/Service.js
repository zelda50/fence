import  Navbar  from '../components/Navbar';
import React from 'react';
import BgVideo from '../components/BgVideo';
import Hero from '../components/Hero';
import aboutImg from '../assets/IMG_5283.jpg'


const Service = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-about"
      className="aImg"
      heroImg={aboutImg}
      title="Service"
      url="/service"
     />
    </>
  )
}

export default Service;