import Layout from "../components/layout/Layout";
import ClassCard from "../components/UI/ClassCard";

function ClassesPage() {
  return (
    <Layout>
      <ClassCard
        title="Body Combat"
        schedule="Mon, Wed - 10:00 AM"
        duration="45 minutes"
        price="24.99"
      />
      <ClassCard
        title="Zumba Fitness"
        schedule="Tue, Thu - 6:00 PM"
        duration="60 minutes"
        price="19.99"
      />
      <ClassCard
        title="Spinning"
        schedule="Mon, Wed, Fri - 7:30 AM"
        duration="45 minutes"
        price="22.99"
      />
      <ClassCard
        title="Power Yoga"
        schedule="Tue, Thu, Sat - 8:00 AM"
        duration="75 minutes"
        price="29.99"
      />
      <ClassCard
        title="HIIT Training"
        schedule="Mon, Wed, Fri - 5:30 PM"
        duration="30 minutes"
        price="27.99"
      />
      <ClassCard
        title="Pilates Reformer"
        schedule="Tue, Thu - 9:00 AM"
        duration="55 minutes"
        price="34.99"
      />
    </Layout>
  );
}

export default ClassesPage;
