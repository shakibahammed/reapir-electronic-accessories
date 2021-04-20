import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProceedServiceList from '../ProceedServiceList/ProceedServiceList';

const ServicesList = () => {

    const [proceedServices, setProceedServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    useEffect(() => {
      fetch(
        "https://afternoon-woodland-27162.herokuapp.com/orderAddedServices?email=" + loggedInUser.email,
         
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setProceedServices(data));
    }, []);
    return (
        <div className="container-fluid row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-7">

      <h1>  Hi {loggedInUser.displayName} ! You Get {proceedServices.length} services</h1>
       {
       proceedServices.map( (proceed) => ( <ProceedServiceList proceed={proceed}> </ProceedServiceList> ))
       }

      </div>

        </div>
    );
};

export default ServicesList;