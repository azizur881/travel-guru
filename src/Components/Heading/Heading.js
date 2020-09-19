import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../data/Logo2.png'
import { Link, NavLink } from 'react-router-dom';
import '../Heading/Heading.css'
import { UserContext } from '../../App';

const Heading = () => {
    const design={
        color:"white",
        padding:"10px",
        margin:"5px",
        fontWeight:"500",
        textDecoration:"none"
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container">
 <NavLink to="#">  <img className="d-flex align-items-center" style={{width:"90px" , height:"auto", marginTop:"10px", position:"absolute" } } src={logo} alt=""/></NavLink> 
            <Navbar className="justify-content-center">
            <input id="input" type="text" name="search" placeholder="search your destination"/>
                <ul id="nav-bar"  >
                    <NavLink style={design} to="#">News</NavLink>
                    <NavLink style={design} to="#">Destination</NavLink>
                    <NavLink style={design} to="#">Blogs</NavLink>
                    <NavLink style={design} to="#">Contact</NavLink>
                </ul>
             <Link to ="/login">  <Button className="ml-5" variant="warning">Login</Button></Link> 
            
           <h4 style={{marginLeft:"10px"}}>{loggedInUser.name}</h4>  
            </Navbar>
        </div>
    );
};

export default Heading;