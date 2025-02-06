import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import PtCard from "../components/UI/PtCard";
import axios from "axios";

function PtSessionsPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employee")
      .then((response) => {
        console.log("Employee data:", response.data);
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div>Error loading trainers!</div></Layout>;

  return (
    <Layout>
      {employees.map((employee) => (
        <PtCard
          key={employee.idemployee}
          id={employee.idemployee}
          name={employee.name}
          phone={employee.phoneNumber}
          schedule={employee.schedule}
          rate={employee.rate}
          description={employee.description}
          image={employee.image ? `http://localhost:5000/uploads/${employee.image}` : '/default-profile.png'}
        />
      ))}
    </Layout>
  );
}

export default PtSessionsPage;
