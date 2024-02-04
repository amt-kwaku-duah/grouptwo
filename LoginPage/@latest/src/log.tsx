import styled from "styled-components";
// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import { useState } from "react";
import '../components/styles/login.css';
import { GoogleLogin } from '@leecheuk/react-google-login';
import logo from '../assets/favicon.ico'

import { useAuth } from "../Context/useAuth";
import { motion } from "framer-motion";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); 

    const { login } = useAuth();


    const closBtn = () => {
        setErrorMessage("")
      }


    //function for google auth

    const responseGoogle = (response) => {
      console.log(response);
      

    };
          
      const onLogin = async (e) => {
      e.preventDefault();

      
      if(email === "" || password === ""){
          setErrorMessage("please fill in all fields")
          return
        }

  
        
        const url = `${import.meta.env.VITE_REMOTE_API_URL}/login`;
        await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({ 
            "email": email,
            "password": password
            })
        }).then(async (res)  => {
          console.log(res); 
          let user = await res.json();   

          if(user.id > 0){
            //call the login function from AuthContext
            login(user)
            setSuccessMessage('login successful ...!')
            setTimeout(() => {
              navigate("/home");
              
            }, 1000);
          
          } else{
            setSuccessMessage('')
            setErrorMessage("")
            setErrorMessage(user.message)
            setTimeout(() => {
              setSuccessMessage('')
              setErrorMessage("")
              
            }, 2000);
          }   
          
          
        }).catch(error => {
          setSuccessMessage('')
          setErrorMessage("")
          setErrorMessage("login failed")
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setTimeout(() => {
            setSuccessMessage('')
            setErrorMessage("")
            setErrorMessage(errorMessage)
            
          }, 2000);
        })

        }

    const Wallpaper = styled.div`
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     `;




  const OnSignIn = styled.button `
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.23);
  width: 89%;
  height:8vh;
  font-size: 1.5rem;
  background: white;
  
  &:hover{
    background-color: #113a3a;
  }
  `;

  

  return (
    <>

     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit = {{ opacity: 0 }}
        transition={{
          duration: 1,
     
        }}>

    <div className="login-background">
    <div className=" login-section ">
      <div className="login-form-element">
        <div className="logo">
        <img src={logo} alt="brand" 
       />
        </div>
          { errorMessage && (
        <div className="error transition duration-700 ease-in-out">
                    <div className="message">
                      <strong>{errorMessage}</strong>
                      <div className="close cursor-pointer" onClick={closBtn}>
                      <span className="material-symbols-outlined">
                        close
                        </span>
                      </div>
                    </div>
                  </div>
          )
          
          }
           { successMessage && (
               <div className="success ">
                    <div className="message">
                      <strong>{successMessage}</strong>
                    
                          </div>
              </div>
          )}
        <div className="form-container">
        <form className="text-center items-center p-2  flex flex-col w-10/12  mx-auto">
         
                  <div className="z-0 w-full mb-2">
                  
                      <input
                        type="email"
                        name="admin_email"
                        id="admin_email"
                        className="h-7vh text-black outline-none w-10/12"
                        placeholder="enter email "
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                     
                    </div>
                    <div className="z-0 w-full mb-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-7vh bg-primary-700 outline-none w-10/12"
                        placeholder="password "
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                 

                    
                    </div>

          </form>
        <div className="w-full text-center items-center -mt-2 px-2">
                        <OnSignIn
                          className=" text-primary-700
                                 hover:text-white  text-xl font-semibold py-3 px-8 text-md rounded-3xl shadow-2xl"
                          onClick={onLogin}
                        >
                          login
                        </OnSignIn>
                        </div>
  <div className="google-auth">
     <GoogleLogin className="w-full p-2 rounded-xl"
          clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}
          buttonText="Gmail"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
  </div>
                        <div className='mt-4 flex gap-4 justify-between py-2 px-0 item-center '>

<p className=" text-2xl text-white text-400 flex justify-between items-start gap-4 w-full mx-auto">
  Dont have an account?
  <Link to="/signup" className="text-md font-semibold text-customGreen-200">
      Sign up
  </Link>
</p>
</div>

        </div>
  

      </div>

                
          </div>
    {/* ------------------------------ grid col 1 ends here ------------------------------------------ */}




    <Wallpaper className="login-wallpaper "  style={{ backgroundImage: `url(${backgroundImage})` }}>

    </Wallpaper>
            
    </div>

    </motion.div>
    </>
  )
}

export default Login