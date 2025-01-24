import Layout from "../components/layout/Layout";
import AutoCarousel from "../components/UI/AutoCarousel";
import MovingText from "../components/UI/MovingText";
import FeaturedPrograms from "../components/UI/FeaturedPrograms";
import CTASection from "../components/UI/CTASection";
import Card from "../components/UI/PopularClassesCard";
import FeedbackCard from "../components/UI/FeedbackCard";
import Carousel from "../assets/images/Carousel.png";
import Carousel1 from "../assets/images/Carousel1.png";
import classes from "../CSS/home-page.module.css";
import cardimage1 from "../assets/images/body combat.jpg";
import cardimage2 from "../assets/images/yoga.png";
import cardimage3 from "../assets/images/zumba.png";
import image from "../assets/images/gymboy3.png";

const trainerimage = image;
const imageUrls = [Carousel, Carousel1];
const cardsData = [
  {
    image: cardimage1,
    time: "6 PM - 8 PM",
    title: "Body Combat",
    description:
      "BodyCombat is the empowering cardio workout where you are totally unleashed.",
  },
  {
    image: cardimage2,
    time: "10 AM - 11 AM",
    title: "Yoga Fitness",
    description:
      "Whether you're a regular yoga guru or just starting out with the basics.",
  },
  {
    image: cardimage3,
    time: "4 PM - 6 PM",
    title: "Zumba Fitness",
    description:
      "This is the activity that everyone's been talking about. Fun and engaging!",
  },
];

function HomePage() {
  return (
    <Layout>
      <MovingText />
      <AutoCarousel images={imageUrls} />
      <div className={classes.homePageContainer}>
        <h2 className={classes.homePageHeading}>{"{Popular Classes}"}</h2>
        <div className={classes.homePage}>
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
      <CTASection />
      <FeaturedPrograms />
      <FeedbackCard image={trainerimage} />
    </Layout>
  );
}

export default HomePage;
