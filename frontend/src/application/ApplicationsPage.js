import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ApplicationForm from "./ApplicationForm";
import { setApplication } from "../redux/slices/ApplicationSlice";

function ApplicationsPage() {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications);

  useEffect(() => {
    axios.get("http://localhost:4000/api/applications/").then((response) => {
      dispatch(setApplication(response.data));
      console.log(response.data);
    });
  }, [dispatch]);

  return (
    <div>
      <ApplicationForm />
      <div>
        {applications &&
          applications.map((item) => <h1 key={item._id}>{item.jobTitle}</h1>)}
      </div>
    </div>
  );
}

export default ApplicationsPage;
