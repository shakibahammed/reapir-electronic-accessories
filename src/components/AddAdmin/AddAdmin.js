import React, { useState } from "react";
import { useHistory } from "react-router";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddAdmin = () => {

  const [admin, setAdmin] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://afternoon-woodland-27162.herokuapp.com/addAdmin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(admin)
      })
          .then(res => res.json())
          .then(data => {
              alert('Your admin is successfully added')
              history.replace('/');
            })
          }
      
          const handleOnBlur = (e) => {
              const newAdmin = admin;
              newAdmin[e.target.name] = e.target.value;
              setAdmin(newAdmin);
          }
          
  return (
    <div className="container-fluid row">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7">
        <h1>this is Add Admin</h1>

       <div>
            <div>
                <div >
                    <h3 className="m-5 text-center">Add a new admin</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleOnBlur} name="email" className="form-control" placeholder=" email" required /> <br />
                        <button className="btn btn-primary">Add email</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
