import Layout from '../components/layout/Layout';
import ClassCard from '../components/UI/ClassCard';
import bodyCombatImage from '../assets/images/bodycombatclass.jpg';
import zumbaFitnessImage from '../assets/images/zumbafitnessclass.jpeg';
import spinningImage from '../assets/images/spinningclass.jpg';
import powerYogaImage from '../assets/images/poweryogaclass.jpg';
import hiitTrainingImage from '../assets/images/hiittrainingclass.jpg';
import pilatesReformerImage from '../assets/images/pilatesreformerclass.jpg';

function ClassesPage() {
    return (
        <Layout>
            <ClassCard 
                title="Body Combat"
                schedule="Mon, Wed - 10:00 AM"
                duration="45 minutes"
                price="24.99"
                backgroundImage={bodyCombatImage}
            />
            <ClassCard 
                title="Zumba Fitness"
                schedule="Tue, Thu - 6:00 PM"al
                duration="60 minutes"
                price="19.99"
                backgroundImage={zumbaFitnessImage}
            />
            <ClassCard 
                title="Spinning"
                schedule="Mon, Wed, Fri - 7:30 AM"
                duration="45 minutes"
                price="22.99"
                backgroundImage={spinningImage}
            />
            <ClassCard 
                title="Power Yoga"
                schedule="Tue, Thu, Sat - 8:00 AM"
                duration="75 minutes"
                price="29.99"
                backgroundImage={powerYogaImage}
            />
            <ClassCard 
                title="HIIT Training"
                schedule="Mon, Wed, Fri - 5:30 PM"
                duration="30 minutes"
                price="27.99"
                backgroundImage={hiitTrainingImage}
            />
            <ClassCard 
                title="Pilates Reformer"
                schedule="Tue, Thu - 9:00 AM"
                duration="55 minutes"
                price="34.99"
                backgroundImage={pilatesReformerImage}
            />
        </Layout>
    );
}

export default ClassesPage;