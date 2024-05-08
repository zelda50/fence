import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import BgVideo from '../components/BgVideo';
import HomeDetails from '../components/HomeDetails';
import InstQbutton from '../components/instQbutton';
import Cards from '../components/Cards';


const Home = () => {
  return (
    <>
    <Navbar/>
    <BgVideo/>
    <InstQbutton showButton={true} />
     <Hero
      cName="hero"
      title="Landmark Creations"
      title2="Your link to better fencing"
      text=""
      url="/"
      btnClass="show"
      buttonText="Instant Quote"
     /> 
     <HomeDetails/>
     <Cards/>
    </>
  );
}

export default Home;