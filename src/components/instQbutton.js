import React from 'react';
import './instQbutton.css';



const InstQbutton = ({ showButton }) => {
  const instantQuote = () => {
    const websiteUrl = 'https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo';
    window.open(websiteUrl, '_blank');
  };
  return showButton ? <button onClick={instantQuote} className={"button"}>Instant Quote</button> : null;
};

export default InstQbutton;
