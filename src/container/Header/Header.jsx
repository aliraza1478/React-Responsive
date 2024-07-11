import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding id="home'>
    <div className='app__wrapper_info'>
      <SubHeading title=" Taste and belive"/>

      <h1 className='app__header-h1'> The key to Fine Dining </h1>
      <p className='p__opensans'>We are open 24 hours All seven days ina week 
      We have all kind of dishes <br></br> including chines and  Desi and also Abric dishes.
      </p>
      <button type='button ' className='custom___button'> Explore Menu</button>

      <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    
       </div>
      </div>
  </div>
);

export default Header;
