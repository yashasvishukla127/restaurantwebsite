import React from 'react';
import './Chef.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__wrapper app__bg section__padding '>

    <div className='app__wrapper_img app__wrapper_img-reverse '>
      <img src={images.chef2} alt='chef'/>
    </div>

    <div className='app__wrapper_info '>

      <SubHeading title="Chef's Word"/>

      <h1 className='headtext__cormorant'> what we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src = {images.quote} alt = "quote"/>
          <p className='p__opensans'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. himshin mithin</p>
        </div>
          <p className='p__opensans'>Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et</p>
      </div>

      <div className='app__chef-sign'>
        <p> monu bironda</p> 
        <p className='p__opensans'> founder </p>
        <img src= {images.sign} alt='sign'/>
      </div>

    </div>
  </div>
);

export default Chef;
