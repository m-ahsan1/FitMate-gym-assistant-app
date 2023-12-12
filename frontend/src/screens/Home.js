import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/jobs/").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  }, []);
  return <div></div>;
}

export default Home;
