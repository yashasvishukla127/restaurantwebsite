import React from 'react';

import './Header.css';
import { images} from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className= "app__header app__wrapper section__padding" id="home">
    <div className= "app__wrapper_info">
      <SubHeading title=" Chase the new Flavour"/>
      <h1 className= "app__header-h1"> The One stop Fine veg cuisines </h1>

      <p className="p__opensans" style={{margin:'2rem 0'}}>the most delight शाही पनीर in area , creamy texture , balanced flavours ,rich in protien . make your evening tasty , by ordering tasty meal combos which would be delvered to you within 15minutes , fresh and hot served</p>
      <button type="button" className="custom__button">Explore Menu</button>


    </div>

    <div className= "app__wrapper_img">
      <img className = "header_image" src = {images.welcome} alt='header image' />
    </div>    


  </div>
);

export default Header;
 