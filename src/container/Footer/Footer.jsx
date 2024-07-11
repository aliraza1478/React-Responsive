import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
<div className='app__Footer-cs'> 
    <div className='app__contact-us'>
      <h1>Contact us</h1>
      <p>9 W 53rd St, New York NY 10019, USA</p>
      <p>+1 212-344-1230</p>
      <p>+1 555-344-1230</p>
    </div>

    <div className='app___title-section'>
      <img className='imgsrc' src={images.gericht} alt='footer logo' />
      <p className='p__opensans1'>
        "The best way to find yourself is to lose yourself in the service of others"
      </p>
      <img style={{ marginTop: "20px" }} src={images.spoon} alt='spoon' />
      <div className='app___Socialapp-icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>
    <div className='app__footer-section3'>
  <p style={{fontSize:"30px", whiteSpace:"nowrap"}}> Working Hours</p>
  <p> Monday-Friday:</p>
<p> 08:00 am- 12:00 am </p>  
<p> Saturday-Sunday</p>
<p>07:00am- 11:00pm</p>
  </div>
    </div>
  </div>
);

export default Footer;
