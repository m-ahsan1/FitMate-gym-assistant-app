import React from "react";

function JobCard({ item }) {
  return (
    <div className="bg-gray-300 ">
      <div className="text-center flex flex-row justify-between py-5 px-6">
        <h1 className="text-[22px]">{item.title}</h1>
        <p>{item.posted_at}</p>
      </div>
      <h2>{item.company_name}</h2>
      <div className="text-center flex flex-row justify-around">
        <p>{item.schedule_type}</p>
        <p>{item.location}</p>
      </div>
      <button className="w-[100px] h-[40px] bg-blue-600">Apply</button>
    </div>
  );
}

export default JobCard;
