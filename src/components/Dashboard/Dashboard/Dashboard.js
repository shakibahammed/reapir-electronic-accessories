import React from "react";

import DashboardMain from "../DashboardMain/DashboardMain";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {

  
  return (
    <div className="container-fluid row">
      <div className="col-md-5 col-sm-6 ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 col-sm-12  d-flex justify-content-center">
        <DashboardMain></DashboardMain>
      </div>
    </div>
  );
};

export default Dashboard;
