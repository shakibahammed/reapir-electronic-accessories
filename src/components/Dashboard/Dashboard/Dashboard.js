import React from "react";


import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {

  
  return (
    <div className="container-fluid row">
      <div className="col-md-5 col-sm-6 ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 col-sm-12  d-flex justify-content-center">
       
      </div>
    </div>
  );
};

export default Dashboard;
