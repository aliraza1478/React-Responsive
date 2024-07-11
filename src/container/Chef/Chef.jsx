import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading  title="chef's word" />
      <h1 className='headtext__cormorant'> What We Belives it </h1>
    </div>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quot'/>
      <p className='P__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='P__opensans'> Chef & Founder </p>
        <img src={images.sign}/>
      </div>
    </div>
  </div>
);

export default Chef;
