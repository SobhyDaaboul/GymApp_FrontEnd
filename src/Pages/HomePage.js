import React from 'react';
import styles from '../CSS/HomePage.module.css';
import AutoCarousel from '../components/UI/AutoCarousel';
import CarouselImage1 from '../assets/images/Carousel.png';
import CarouselImage2 from '../assets/images/Carousel1.png';
import cardimage1 from '../assets/images/body combat.jpeg';
import cardimage2 from '../assets/images/Yoga.jpg';
import cardimage3 from '../assets/images/zumba.jpeg';
import Card from '../components/UI/Card'; 

const imageUrls=[CarouselImage1,CarouselImage2];
const cardsData = [
  {
    image: cardimage1,
    time: '6 PM - 8 PM',
    title: 'Body Combat',
    description:
      'BodyCombat is the empowering cardio workout where you are totally unleashed.',
  },
  {
    image: cardimage2,
    time: '10 AM - 11 AM',
    title: 'Yoga Fitness',
    description:
      'Whether you’re a regular yoga guru or just starting out with the basics.',
  },
  {
    image: cardimage3,
    time: '4 PM - 6 PM',
    title: 'Zumba Fitness',
    description:
      'This is the activity that everyone’s been talking about. Fun and engaging!',
  },
];

function HomePage() {
  return (
    <div>
    <AutoCarousel images={imageUrls}/>
    <div className={styles['homepage-container']}>
      <h2 className={styles['homepage-heading']}>Popular Classes</h2>
      <div className={styles['homepage-grid']}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            time={card.time}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default HomePage;
