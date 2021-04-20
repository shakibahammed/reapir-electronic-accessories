import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const AllServices = () => {

  const [services , setServices] =useState([])

useEffect( () => {
fetch('https://afternoon-woodland-27162.herokuapp.com/servicesInfo')
.then(res => res.json())
.then(data => setServices(data))


}, [])

    return (
       <main style={{backgroundColor:'lightgrey'}} className="row">
           <h1 className="text-center mt-5">Our Services</h1>
           {
               services.map( service => <ServiceCard service={service}> </ServiceCard> )
           }
       </main>
    );
};

export default AllServices;