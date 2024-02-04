// import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import React, { useState } from "react";
// import Brand from "./Brand";
// import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router
// import { useAuth } from 'path-to-your-auth-context';
<MdOutlineEmail />;

const Form = () => {
  // const navigate = useNavigate();
  //state for input fields and error Meassages
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [inValidMessage, setInValidMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState<string | null>(null);
  //   const { login } = useAuth();
  const closBtn = () => {
    setErrorMessage("");
  };

  //login function
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setIsFieldEmpty("enter all details");
      setTimeout(() => {
        setIsFieldEmpty("");
      }, 10000);
      return;
    }
    setIsSubmitting(true);

    //request when input fields are entered
    const url = `http://localhost:3080/api/user`;
    try {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      setEmail("");
      setPassword("");

      if (res.ok) {
        const user = await res.json();
        if (user.id > 0) {
          //   login(user);
          setSuccessMessage("Login successful ...!");
          setTimeout(() => {
            // navigate("/home");
          }, 1000);
        }

        //error messages
        // } else {
        //   setSuccessMessage("");
        //   setErrorMessage("");
        //   setErrorMessage(user.message);
        //   setTimeout(() => {
        //     setSuccessMessage("");
        //     setErrorMessage("");
        //   }, 20000);
        // }
      } else {
        setEmail("");
        setPassword("");
        setSuccessMessage("");
        setErrorMessage("");
        setErrorMessage("Invalid Email");
        const errorCode = res.status;
        const errorMessage = await res.text();
        console.error(`Error ${errorCode}: ${errorMessage}`);
        setTimeout(() => {
          setSuccessMessage("");
          setErrorMessage("");
          //   setErrorMessage(errorMessage);
        }, 10000);
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setSuccessMessage("");
      setErrorMessage("");
      //   setErrorMessage("invalid Password");
      setInValidMessage("invalid message");
      console.error(error);
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
        setInValidMessage("");
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
     {/*if input field is empty */}
      {isFieldEmpty && (
        <div className="success ">
          <div className="message">
            <strong>{isFieldEmpty}</strong>
            {/* <Brand isFieldEmpty={isFieldEmpty}/> */}
          </div>
        </div>
      )}
      
      {/*if password is invalid*/}
      {inValidMessage && (
        <div className="success ">
          <div className="message">
            <strong>{inValidMessage}</strong>
          </div>
        </div>
      )}

      {/* if login is successful */}
      {successMessage && (
        <div className="success ">
          <div className="message">
            <strong>{successMessage}</strong>
          </div>
        </div>
      )}

      <form action="" onSubmit={onLogin}>
        <div className="form-labels">
          <label>Email/ Staff ID</label>
          <input
            type="text"
            placeholder="emmanuella.neizer@amalitech.org"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={errorMessage ? "error-border" : ""}
          />

         {/* if email is null display the svg */}
          {email == "" && (
            <div className="email-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M1.6665 5.83301L8.4706 10.5959C9.02158 10.9816 9.29707 11.1744 9.59672 11.2491C9.86142 11.3151 10.1383 11.3151 10.403 11.2491C10.7026 11.1744 10.9781 10.9816 11.5291 10.5959L18.3332 5.83301M5.6665 16.6663H14.3332C15.7333 16.6663 16.4334 16.6663 16.9681 16.3939C17.4386 16.1542 17.821 15.7717 18.0607 15.3013C18.3332 14.7665 18.3332 14.0665 18.3332 12.6663V7.33301C18.3332 5.93288 18.3332 5.23281 18.0607 4.69803C17.821 4.22763 17.4386 3.84517 16.9681 3.60549C16.4334 3.33301 15.7333 3.33301 14.3332 3.33301H5.6665C4.26637 3.33301 3.56631 3.33301 3.03153 3.60549C2.56112 3.84517 2.17867 4.22763 1.93899 4.69803C1.6665 5.23281 1.6665 5.93288 1.6665 7.33301V12.6663C1.6665 14.0665 1.6665 14.7665 1.93899 15.3013C2.17867 15.7717 2.56112 16.1542 3.03153 16.3939C3.56631 16.6663 4.26637 16.6663 5.6665 16.6663Z"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          
          {/* error message: when email is invalid */}
          {isFieldEmpty && (
            <div className="error">
              <div className="message">
                <strong>{isFieldEmpty}</strong>
                <div className="close cursor-pointer" onClick={closBtn}>
                  {/* <span className="material-symbols-outlined">close</span> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="form-labels">
          <label>Password</label>
          <input
            className="pswd-input"
            type="password"
            placeholder="........"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password-svg">
            {/* show svg when password is null */}
            {password == "" && (
              <div className="lock-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M14.1668 9.16667V6.66667C14.1668 4.36548 12.3013 2.5 10.0002 2.5C7.69898 2.5 5.8335 4.36548 5.8335 6.66667V9.16667M7.3335 17.5H12.6668C14.067 17.5 14.767 17.5 15.3018 17.2275C15.7722 16.9878 16.1547 16.6054 16.3943 16.135C16.6668 15.6002 16.6668 14.9001 16.6668 13.5V13.1667C16.6668 11.7665 16.6668 11.0665 16.3943 10.5317C16.1547 10.0613 15.7722 9.67883 15.3018 9.43915C14.767 9.16667 14.067 9.16667 12.6668 9.16667H7.3335C5.93336 9.16667 5.2333 9.16667 4.69852 9.43915C4.22811 9.67883 3.84566 10.0613 3.60598 10.5317C3.3335 11.0665 3.3335 11.7665 3.3335 13.1667V13.5C3.3335 14.9001 3.3335 15.6002 3.60598 16.135C3.84566 16.6054 4.22811 16.9878 4.69852 17.2275C5.2333 17.5 5.93336 17.5 7.3335 17.5Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            <div className="eye-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M7.16196 3.39488C7.4329 3.35482 7.7124 3.33333 8.00028 3.33333C11.4036 3.33333 13.6369 6.33656 14.3871 7.52455C14.4779 7.66833 14.5233 7.74023 14.5488 7.85112C14.5678 7.93439 14.5678 8.06578 14.5487 8.14905C14.5233 8.25993 14.4776 8.3323 14.3861 8.47705C14.1862 8.79343 13.8814 9.23807 13.4777 9.7203M4.48288 4.47669C3.0415 5.45447 2.06297 6.81292 1.61407 7.52352C1.52286 7.66791 1.47725 7.74011 1.45183 7.85099C1.43273 7.93426 1.43272 8.06563 1.45181 8.14891C1.47722 8.25979 1.52262 8.33168 1.61342 8.47545C2.36369 9.66344 4.59694 12.6667 8.00028 12.6667C9.37255 12.6667 10.5546 12.1784 11.5259 11.5177M2.00028 2L14.0003 14M6.58606 6.58579C6.22413 6.94772 6.00028 7.44772 6.00028 8C6.00028 9.10457 6.89571 10 8.00028 10C8.55256 10 9.05256 9.77614 9.41449 9.41421"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="form-btn">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Log In"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
