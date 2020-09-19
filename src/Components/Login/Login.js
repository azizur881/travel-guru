import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import  './Login.css'
import googleLogo from '../../data/Icon/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import{UserContext} from "../../App"
import fbLogo from '../../data/Icon/fb.png'

const Login = () => {
    const [newUser, setNewUser] = useState(false)
  const [users , setUsers] = useState({
    isSignedIn : false,
    newUser:false,
    name:"",
    email:"",
    password:"",
    photo:'',
    error:"",
    success:false,

  })
        const [loggedInUser,setLoggedInUser]= useContext(UserContext)
        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
            const history = useHistory();
            const location= useLocation();
            let { from } = location.state || { from: { pathname: "/" }}
            const handleGoogle = () =>{
                const provider = new firebase.auth.GoogleAuthProvider();
                // const fbProvider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const{displayName,email} = result.user;
            const signedInUser = {name:displayName ,email}
            console.log(signedInUser);
            setLoggedInUser(signedInUser)
            history.replace(from)
          })
    }
    const handleFacebook = () =>{
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const{displayName,email} = result.user;
            const signedInUser = {name:displayName ,email}
            console.log(signedInUser);
            setLoggedInUser(signedInUser)
            history.replace(from)
        
          });
    }
    const handleChange = (e) =>{
        let isFormValid = true;
        if(e.target.name === "email"){
            isFormValid =/\S+@\S+\.\S+/.test(e.target.value)
           
        }
        if(e.target.name === "password"){
            isFormValid = e.target.value.length > 6
        }
        if(isFormValid){
            const usersInfo={...users}
            usersInfo[e.target.name]= e.target.value
            setUsers(usersInfo)
        }
    }
    
            
    const handleSubmit = (e) =>{
        if(users.email && users.password){
            firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
            .then(res =>{
                const  usersInfo ={...users}
                usersInfo.error = '';
                usersInfo.success=true
                setUsers(usersInfo)
                
            })
            .catch(function(error) {

             const  usersInfo ={...users}
             usersInfo.error = error.message
             usersInfo.success=false
             setUsers(usersInfo)
              });
        }
        e.preventDefault();
    }
   

    return (
        <div>
            <div id="google-btn">
                   <Link><img style={{width:"25px",height:"auto",display:"inline"}}src={googleLogo} alt=""/>  <strong> <span onClick={handleGoogle}>Continue with  with google</span></strong></Link>
                  <br/>
            </div>
            <div id="fb-btn">
            <Link onClick={handleFacebook}> <img style={{width:"25px",height:"auto",display:"inline"}} src={fbLogo} alt=""/> continue with facebook</Link>
            </div>
                <div className="registration-form">
                    <form onSubmit={handleSubmit}>
                        <strong><span>Create an account</span></strong>
                        <br/>
                        {newUser && <input onBlur={handleChange} type="text" name="name" className="form-input" placeholder=" Full name" required/>}
                        <br/>
                        <input onBlur={handleChange} type="email" name="email" className="form-input" placeholder="Email" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" className="form-input" placeholder="Password" required/>
                        {newUser &&   <input onBlur={handleChange} type="password" name="password" className="form-input" placeholder="Confirm Password" required/>}
                        <br/>
                        <input type="submit" value="submit" className="submit-btn"/>
                    </form>
                    <span style={{color:"red",fontWeight:"300"}}>{users.error}</span>
                   { users.success && <span style={{color:"green",fontWeight:"300"}}>Account successfully created </span>}
                   <Button id="new-btn" onClick={()=>setNewUser(!newUser)}>New? Let's create an account</Button>
                </div>
            <div className="or">
                <h5>Or</h5>
            </div>
        </div>
    );
};

export default Login;