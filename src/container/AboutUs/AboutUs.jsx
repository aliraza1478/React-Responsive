import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app___bg flex__center section__padding" id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter"/>
    </div>
    <div className='app___aboutus-content flex__center'>
      <div className='app__aboutus-content_aboutus'>
        <h1 className='headtext__cormorant'> About</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__images'/>
      <p className='p__opensans'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <button type='button' className='custom__button'>Know more</button>  
      </div>
      <div className='app__aboutus-content-knife flex__center'>
      <img src={images.knife} alt="about_knife"/>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'> Our history</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__images'/>
      <p className='p__opensans'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <button type='button' className='custom__button'>Know more</button>  
      </div>

      </div>
    </div>
  </div>
);

export default AboutUs;
