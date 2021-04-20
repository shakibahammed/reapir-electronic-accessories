import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [isAdmin, SetIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://afternoon-woodland-27162.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) =>{
        SetIsAdmin(data)
          console.log(data) });
  }, [isAdmin]);

  return (
    <div>
      <h1>Sidebar</h1>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">

         { isAdmin  ? <div>
            <li>
              <Link to="/dashboard" className="text-white">
                <span>Dashboard</span>
              </Link>
            </li>
            
            <li>
              <Link to="/addServices" className="text-white">
                <span>Add Services</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <span>Add Admin</span>
              </Link>
            </li>

            <li>
              <Link to="/manageServices" className="text-white">
                <span>Manage Services</span>
              </Link>
            </li>
          </div>
            :
          <div>
            <li>
              <Link to="/checkout/:id" className="text-white">
                <span>CheckOut</span>
              </Link>
            </li>
            <li>
              <Link to="/serviceList" className="text-white">
                <span>Services List</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <span>Reviews</span>
              </Link>
            </li>

            <li>
              <Link to="/home" className="text-white">
                <span>Home</span>
              </Link>
            </li>
          </div>}

        </ul>

        <div>
          <Link to="/" className="text-white">
            {" "}
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
