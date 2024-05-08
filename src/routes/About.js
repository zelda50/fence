import  Navbar  from '../components/Navbar';
import React from 'react';
import BgVideo from '../components/BgVideo';
import Hero from '../components/Hero';
import aboutImg from '../assets/IMG_4601.jpg'


const About = () => {
  return (
    <>
    <Navbar/>
    {/* <BgVideo/> */}
     <Hero
      cName="hero-about"
      className="aImg"
      heroImg={aboutImg}
      title="About Us"
      url="/about"
     />
    </>
  )
}

export default About;