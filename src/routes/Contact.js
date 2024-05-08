import  Navbar  from '../components/Navbar';
import React from 'react';
import BgVideo from '../components/BgVideo';
import Hero from '../components/Hero';
import contactImg from '../assets/IMG_5283.jpg'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-about"
      className="aImg"
      heroImg={contactImg}
      title="Contact"
      url="/contact"
     />
     <ContactForm/>
    </>
  )
}

export default Contact;