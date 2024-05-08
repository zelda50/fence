import './HeroStyles.css';

const Hero = (props) => {
  
  return (<>
      <div className={props.cName}>
        <img className={props.className} alt={props.cImg} src={props.heroImg}></img>
        <div className='hero-text'>
          <h1>{props.title}</h1>
          <h2>{props.title2}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </>);
}

export default Hero;