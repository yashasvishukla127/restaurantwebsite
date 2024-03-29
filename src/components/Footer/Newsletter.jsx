import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    
    <div className='app__newsletter-heading'>
      <SubHeading title=" NEWSLETTER"/>
      <h1 className='headtext__cormorant'> Subscribe to our Newsletter</h1>
      <p className='p__opensans'> and never miss any updates regarding offers and new dishes</p>
    </div>


    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email'/>
      <button className='custom__button'>Subscribe</button>
      

    </div>

    
  </div>
);

export default Newsletter;
