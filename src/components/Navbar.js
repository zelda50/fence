import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const instQuote = () => {
  const websiteUrl = 'https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo';
  window.open(websiteUrl, '_blank');

};
class Navbar extends Component{
  state = { clicked: false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  render(){
    return(
      <nav className='NavbarItems'>
        <img className='logo' src={logo} alt='logo' ></img>

          <div className='menu-icons' onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) =>{
              return(
                <li key={index}>
                  <Link   className={item.cName} to={item.url}>
                    <i className={item.icon}></i>{item.title}
                  </Link>
                </li>
              );
            })}
            <button onClick={instQuote}>Instant Quote</button>
          </ul>
      </nav>
    )
  }
}

export default Navbar;