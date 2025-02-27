import Layout from "../components/layout/Layout";
import MyMembershipCard from "../components/UI/MyMembershipCard";
import MyBookedClasses from "../components/UI/MyBookedClasses";

function MyWorkOutPage() {
  return (
    <Layout>
      <MyMembershipCard />
      <MyBookedClasses />
    </Layout>
  );
}

export default MyWorkOutPage;
