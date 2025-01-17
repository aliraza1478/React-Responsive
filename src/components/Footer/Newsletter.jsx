import React from 'react';
import './Newsletter.css';
import { SubHeading } from '../../components';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'> Suscribe to our News channel</h1>
      <p className='p__opensans'>And never miss latest Updates</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email address'/>
     <button type='button' className='custom__button'>Suscribe</button>
    
         </div>
      </div>
);

export default Newsletter;
