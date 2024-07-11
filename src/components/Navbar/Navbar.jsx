import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(prevState => !prevState); // Toggles the value of toggleMenu
  };

  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.gericht} alt="app logo"/>
      </div>
      <ul className="app_navbar-links">
        <li className='p_opensans'><a href='#home'>Home</a></li>
        <li className='p_opensans'><a href='#about'>About</a></li>
        <li className='p_opensans'><a href='#menu'>Menu</a></li>
        <li className='p_opensans'><a href='#award'>Award</a></li>
        <li className='p_opensans'><a href='#contact'>Contact</a></li>
      </ul> 
      <div className='app-navbar-login'>
        <a href='#login' className='p_opensans'>Log In / Register</a>
        <a href='/' className='p_opensans'>Book Table</a>
      </div>
      <div className='app-navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={handleToggleMenu} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <ul className="app_navbar-small-screen">
              <li className='p_opensans'><a href='#home'>Home</a></li>
              <li className='p_opensans'><a href='#about'>About</a></li>
              <li className='p_opensans'><a href='#menu'>Menu</a></li>
              <li className='p_opensans'><a href='#award'>Award</a></li>
              <li className='p_opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={handleToggleMenu} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
