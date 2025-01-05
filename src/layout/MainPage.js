import React from "react";
import AutoCarousel from "../components/AutoCarousel";
import Carousel from '../assets/images/Carousel.png';
import Carousel1 from '../assets/images/Carousel1.png';
import classes from './MainPage.module.css';

const imageUrls=[Carousel,Carousel1];


function MainPage(){
  return(
    <div className={classes.mainclass}>
      <div>
        <AutoCarousel images={imageUrls}/>
      </div>

      <div>
        
      </div>

      <div>
        
      </div>
  
    </div>
  );
}

export default MainPage;