import Layout from '../components/layout/Layout';
import PtCard from '../components/UI/PtCard';
import pt1Image from '../assets/images/pt1.jpg';
import pt2Image from '../assets/images/pt2.jpg';
import pt3Image from '../assets/images/pt3.jpg';
import pt4Image from '../assets/images/pt4.jpg';
import pt5Image from '../assets/images/pt5.jpg';


function PtSessionsPage() {
    return (
        <Layout>
            <PtCard 
                name="Charbel Rizk"
                phone="(961) 71 71 55 98"
                schedule="Mon-Fri: 8AM-4PM"
                rate="99"
                description="Certified personal trainer with 5+ years of experience specializing in strength training and weight loss."
                image={pt1Image}
            />
            <PtCard 
                name="Natasha The Beauty"
                phone="(555) 234-5678"
                schedule="Mon-Sat: 7AM-3PM"
                rate="75"
                description="Sports nutrition specialist and CrossFit trainer. Expert in functional fitness and HIIT workouts."
                image={pt2Image}
            />
            <PtCard 
                name="Sobhy Daaboul"
                phone="(961) 71 62 96 55"
                schedule="Tue-Sat: 9AM-5PM"
                rate="70"
                description="Former athlete specializing in sports-specific training and rehabilitation exercises."
                image={pt3Image}
            />
            <PtCard 
                name="Emily Davis"
                phone="(555) 456-7890"
                schedule="Mon-Fri: 6AM-2PM"
                rate="80"
                description="Yoga instructor and personal trainer focusing on flexibility, mobility, and mind-body connection."
                image={pt4Image}
            />
            <PtCard 
                name="David Martinez"
                phone="(555) 567-8901"
                schedule="Wed-Sun: 10AM-6PM"
                rate="85"
                description="Bodybuilding specialist with expertise in muscle gain and contest preparation."
                image={pt5Image}
            />
        </Layout>
    );
}

export default PtSessionsPage;