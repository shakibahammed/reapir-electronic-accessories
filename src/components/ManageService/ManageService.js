import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';



const ManageService = () => {
    const [manage , setManage] =useState([])

    useEffect( () => {
    fetch('http://localhost:5000/servicesInfo')
    .then(res => res.json())
    .then(data => setManage(data))
    
    
    }, [manage] )
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">

            <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Service Fee</th>
            
            <th>Action</th>
          </tr>
        </thead>
        {manage.map((manage) => (
          <tbody>
            <tr>
              <td>1</td>
              <td>{manage.name}</td>
              <td>{manage.price}</td>
              
     
 <td>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
           
            </div>
        </div>
    );
};

export default ManageService;