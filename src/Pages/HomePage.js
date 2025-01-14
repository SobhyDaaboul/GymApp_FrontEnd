import React from "react";
import AutoCarousel from "../components/AutoCarousel";
import Carousel from '../assets/images/Carousel.png';
import Carousel1 from '../assets/images/Carousel1.png';


const imageUrls=[Carousel,Carousel1];

function HomePage(){
  return(
        <div>
        <AutoCarousel images={imageUrls}/>
        </div>
  );
}

export default HomePage;