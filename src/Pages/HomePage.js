import React from "react";
import AutoCarousel from '../components/UI/AutoCarousel';
import Carousel from '../assets/images/Carousel.png';
import Carousel1 from '../assets/images/Carousel1.png';
import Layout from '../components/layout/Layout';
import { useEffect } from "react";


const imageUrls=[Carousel,Carousel1];

function HomePage(){
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";

    return () => {
      // Cleanup: Reset to the default background when leaving the page
      document.body.style.backgroundImage = "url('/path-to-your-image.jpg')";
      document.body.style.backgroundColor = "transparent";
    };
  }, []);
  return (
    <Layout>
        <div>
        <AutoCarousel images={imageUrls}/>
        </div>
    </Layout>
  );
}

export default HomePage;