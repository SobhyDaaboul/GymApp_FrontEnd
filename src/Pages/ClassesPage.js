import Layout from "../components/layout/Layout";
import ClassCard from "../components/UI/ClassCard";
import axios from "axios";
import { useState, useEffect } from "react";

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/class/getclasses") //Akal
      .then((response) => {
        setClasses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>Error loading classes!</div>
      </Layout>
    );

  return (
    <Layout>
      {classes.map((classItem) => (
        <ClassCard
          key={classItem.classID} // Used by React, not accessible in ClassCard
          classCode={classItem.classCode} // Explicitly pass classCode as a prop
          title={classItem.className}
          schedule={classItem.schedule}
          duration={classItem.duration}
          price={classItem.price}
          backgroundImage={
            classItem.image
              ? `http://localhost:5000/uploads/${classItem.image}`
              : "/default-class.png"
          }
        />
      ))}
    </Layout>
  );
}

export default ClassesPage;
