import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section __padding' id='contact'> 
    <div className='app__wrapper_info'>
<SubHeading title="Contact "/>
<h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Find us</h1>

<div className='app__wrapper-content'>
<p className='p__opensans'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
<p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem,0 " }}>Opening Hours</p>
<p className='p__opensans'>Mon-Friday: 10:00am -2:00am </p>
<p className='p__opensans'>sat-Sunday: 10:00am -3:00am </p>
</div>
<button type='button' className='custom__button'>Vist us</button>
</div>

<div className='app__wrapper_img'>

  <img src={images.findus} alt='Find us'></img>
</div>
  
  </div>
);

export default FindUs;
