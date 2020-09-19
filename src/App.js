import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Sundarban from './Components/Sundarban/Sundarban';
import SaintMartin from './Components/SaintMartin/SaintMartin';
import Sremongal from './Components/Sremongal/Sremongal';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser]= useState({})
  return (
    <div>
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <PrivateRoute path ="/booking">
            <Booking/>
          </PrivateRoute>
          <Route path ="/sundarban">
          <Sundarban/>
          </Route>
          <Route path ="/saintmartin">
            <SaintMartin/>
          </Route>
          <Route path="/sremongal">
            <Sremongal/>
          </Route>
          <Route path ="/login">
            <Login/>
          </Route>
          
         
        </Switch>
      </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
