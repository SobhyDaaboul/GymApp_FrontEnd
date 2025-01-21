import Layout from '../components/layout/Layout';
import PtCard from '../components/UI/PtCard';

function PtSessionsPage() {
    return (
        <Layout>
            <PtCard 
                name="John Smith"
                phone="(555) 123-4567"
                schedule="Mon-Fri: 8AM-4PM"
                rate="65"
                description="Certified personal trainer with 10+ years of experience specializing in strength training and weight loss."
            />
            <PtCard 
                name="Sarah Johnson"
                phone="(555) 234-5678"
                schedule="Mon-Sat: 7AM-3PM"
                rate="75"
                description="Sports nutrition specialist and CrossFit trainer. Expert in functional fitness and HIIT workouts."
            />
            <PtCard 
                name="Mike Williams"
                phone="(555) 345-6789"
                schedule="Tue-Sun: 9AM-5PM"
                rate="70"
                description="Former athlete specializing in sports-specific training and rehabilitation exercises."
            />
            <PtCard 
                name="Emily Davis"
                phone="(555) 456-7890"
                schedule="Mon-Fri: 6AM-2PM"
                rate="80"
                description="Yoga instructor and personal trainer focusing on flexibility, mobility, and mind-body connection."
            />
            <PtCard 
                name="David Martinez"
                phone="(555) 567-8901"
                schedule="Wed-Sun: 10AM-6PM"
                rate="85"
                description="Bodybuilding specialist with expertise in muscle gain and contest preparation."
            />
        </Layout>
    );
}

export default PtSessionsPage;