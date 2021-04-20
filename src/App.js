
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './components/Home/Home/Home';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheackOut/CheckOut';
import AddServices from './components/AddServices/AddServices';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Review from './components/Review/Review';
import ServicesList from './components/ServicesList/ServicesList';
import ManageService from './components/ManageService/ManageService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

     <Router>
       <Switch>
          <Route exact path="/">
                <Home></Home>
          </Route>
          
          <Route  path="/home">
              <Home></Home>
          </Route>

          <Route path="/addServices">
           <AddServices></AddServices>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/addAdmin">
          <AddAdmin></AddAdmin>
          </Route>

          <Route  path="/serviceList">
             <ServicesList></ServicesList>
          </Route>

          <Route path="/review">
          <Review></Review>
          </Route>

          <Route path="/manageServices">
          <ManageService></ManageService>
          </Route>

          <PrivateRoute path="/checkout/:id">
           <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          </Switch>
  </Router>

   </UserContext.Provider>

  );
}

export default App;
