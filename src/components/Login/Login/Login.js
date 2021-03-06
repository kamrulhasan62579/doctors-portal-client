import React, { useContext, useState } from "react";
import GoogleButton from 'react-google-button'
import { initializeApp } from "firebase/app";
import { useForm } from "react-hook-form";
import "./Login.css"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8JehC53I7yTNkwo658cY8x5REhUBoujk",
  authDomain: "doctors-portal-3d32d.firebaseapp.com",
  projectId: "doctors-portal-3d32d",
  storageBucket: "doctors-portal-3d32d.appspot.com",
  messagingSenderId: "769210545245",
  appId: "1:769210545245:web:fcf85bce97da23cd8b49b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const Login = () => {

         const [err, setErr] = useState({})


         const auth = getAuth();
         let history = useHistory()
         let location = useLocation();

         let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
     const [newUser, setNewUser] = useState(false)
     const { register, handleSubmit, watch, formState: { errors } } = useForm();

     const onSubmit = data => {
       if(newUser){
             createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                // tokenTime();
                const token = res.user.accessToken;
                sessionStorage.setItem('token', token)
                setLoggedInUser(data)
                setErr({});
                 history.replace(from);
            })
            .catch((error) => {
               
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                const newErr = {...err};
                newErr.errorCode = errorCode;
                newErr.errorMessage = errorMessage;
                setErr(newErr)
            });
       }
       if(!newUser){
        //    tokenTime();
          signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const token = userCredential.user.accessToken;
            sessionStorage.setItem('token', token)
            const newData = {...loggedInUser};
            newData.email = data.email
            setLoggedInUser(newData);
            setErr({});
             history.replace(from);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            const newErr = {...err};
            newErr.errorCode = errorCode;
            newErr.errorMessage = errorMessage;
            setErr(newErr)
        });
       }

     };
    //  Implement Google Sign In
    const provider = new GoogleAuthProvider();
 
     const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const token = result.user.accessToken;
            sessionStorage.setItem('token', token)
            const user = result.user;
            const newData = {...loggedInUser};
            newData.displayName = user.displayName;
            newData.email = user.email;
            setLoggedInUser(newData);
            setErr({});
             history.replace(from);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential, email, errorCode, errorMessage);
            const newErr = {...err};
            newErr.errorCode = errorCode;
            newErr.errorMessage = errorMessage;
            setErr(newErr)
        });

     }

    return (
        <div>
            <div  style={{height: "70vh"}}   className="  d-flex justify-content-center align-items-center">
            <div style={{boxShadow: " rgb(204, 219, 232) 3px 3px 6px 1px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}} className="ps-5 pe-5  col-10 col-sm-9 col-md-6 col-lg-6 col-xl-4 col-xxl-4 p-3 mb-5 bg-light rounded">
            {
                newUser ? <form onSubmit={handleSubmit(onSubmit)}>
                <div className="newUserForm">
                                        <h3 style={{textAlign: "center"}}>Sign Up</h3>
                    <input className="input form-control" type="text" placeholder="Full Name" {...register("displayName", {required: true, maxLength: 8})} /> 
                    <br/>{errors.displayName && errors.displayName.type === "required" && <span className="error">First name is required</span>}
                    {errors.displayName && errors.displayName.type === "maxLength" && <span className="error">Max length exceeded</span> }
                    
                

                    <input className="input form-control" type="text" placeholder="Email" {...register("email", {required: true, pattern: /\S+@\S+\.\S+/})} />    
                    <br/>{errors.email && errors.email.type === "required" && <span className="error">Email is required</span>}
                    {errors.email && errors.email.type === "pattern" && <span className="error">You should insert email like this format /\S+@\S+\.\S+/ pattern</span> }
                    

                    <input className="input form-control" type="tel" placeholder="Mobile number" {...register("number", {required: true, minLength: 6, maxLength: 12})} />   
                    <br/> {errors.number && errors.number.type === "required" && <span className="error">Mobile number is required</span>}
                    {errors.number && errors.number.type === "maxLength" && <span className="error">Max length exceeded</span> }
                   
           

                    <input className="input form-control" type="password" placeholder="Password" {...register("password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, minLength: 8, maxLength: 30})} />
                    <br/> {errors.password && errors.password.type === "required" && <span className="error">Password is required</span>}
                    {errors.password && errors.password.type === "pattern" && <span className="error">Password must have min 1 uppercase letter,  <br/> min 1 lowercase letter, min 1 <br/> special character, min 1 number, min <br/> 8 characters, max 30 characters.</span> }
                    

                    <input className="btn btn-success form-control" value="Sign Up" type="submit" />
                </div>
            </form>
            : 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="newUserForm">
                    <h3 style={{textAlign: "center"}}>Log In</h3>
                    <input className="input form-control" type="text" placeholder="Email" {...register("email", {required: true})} />    
                    <br/>{errors.email && errors.email.type === "required" && <span className="error">Email is required</span>}
                  

                    <input className="input form-control" type="password" placeholder="Password" {...register("password", {required: true})} />
                    <br/> {errors.password && errors.password.type === "required" && <span className="error">Password is required</span>}
                    
                  

                    <input className="btn btn-success form-control" value="Log In" type="submit" />
                </div>
            </form>
            } <br/>
            {
            newUser ? <p >Already have an account? <span style={{color: 'blue'}} onClick={() => setNewUser(!newUser)}>Log In</span></p> : 
            <p>Are you a new user? <span style={{color: 'blue'}} onClick={() => setNewUser(!newUser)}>Sign Up</span></p>
            }

        </div>
                 
        </div>
              {
                   err.errorMessage && <div>
                       <h5 style={{color: "red", textAlign: "center"}}>{err.errorCode}</h5>
                       <p style={{color: "red", textAlign: "center"}}>{err.errorMessage}</p>
                   </div>
               }  
             <div className="d-flex justify-content-center">
               <GoogleButton onClick={handleGoogleSignIn}/>
            </div> 
        </div>
    );
};

export default Login;