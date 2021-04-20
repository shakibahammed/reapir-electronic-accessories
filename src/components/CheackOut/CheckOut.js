import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Payment from '../Payment/Payment';


const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [SelectedService, setSelectedServices] = useState([]);

    useEffect(() => {
      fetch("https://afternoon-woodland-27162.herokuapp.com/servicesInfo")
        .then((res) => res.json())
        .then((data) => setSelectedServices(data));
    }, []);
    const service = SelectedService.find((pd) => pd._id === id);

    // handleServicesProceed
    const handleServicesProceed = () =>{
 const completeOrder = {
      ...loggedInUser,
      ...service,
      _id: Math.random(),
      orderTime: new Date(),
    };
    console.log(completeOrder);

    fetch("https://afternoon-woodland-27162.herokuapp.com/orderAdded", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(completeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Done");
        }
      });
    }

    return (
        <div className="container-fluid row">
           <div className="col-md-3">
            <Sidebar></Sidebar>
           </div>
           <div  className="col-md-7">
           <h1>this is checkout</h1>


           <table class="table">
        <thead>
          <tr>
            <th scope="col">service Name</th>
            <th scope="col">service Price</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>{service && service.name}</td>
            <td> {service && service.price}$</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleServicesProceed}>Proceed To CheckOut</button>
      <div className="mt-5">
              
              <Payment></Payment>
    </div>
           </div>

         
        </div>
    );
};

export default CheckOut;