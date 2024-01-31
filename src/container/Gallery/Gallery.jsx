import React from 'react';

import { BsInstagram, BsArrowLeftShort ,BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import{images , data} from '../../constants';
import HorizontalScroll from 'react-scroll-horizontal'


 
import './Gallery.css';

const galleryImages = [images.gallery01 , images.gallery02 , images.gallery03 ,
   images.gallery04 , images.gallery05 ,images.gallery06 ];

const Gallery = () => {
  
  const scrollRef = React.useRef(null);
   
  const scroll = (direction) => {
    const { current } = scrollRef;
    
    if(direction === 'left') {
      current.scrollLeft-=300;
    }else {
      current.scrollLeft+=300;
    }
  };  



  return (
  
  
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      
      <SubHeading title=' instagram '/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{marginTop:'2rem' , color:'#AAA'}}>LOREM ISPIM SODIRE SIDFU HFU COAROFKF TI S FTJL  TSI ISHIS THATH IS ITH ASITH</p>

      <button type='button' className='custom__button'>VIEW MORE</button>

    </div>



    <div className="app__gallery-images"> 
      
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image,index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              
                <img src={image} alt='gallery'/>
                <BsInstagram className='gallery__image-icon'/>
              
            </div>
          ))}
        </div>

      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')}/>

      </div>

 
    </div>


    






  </div>
);
}
export default Gallery;
