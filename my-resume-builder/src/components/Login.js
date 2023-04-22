import React, { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isemailValid, setemailIsValid] = useState(true);
  const [ispassValid, setpassIsValid]= useState(true);
  const validationHandler = (e) => {
   //e.preventDefault();
    if (isemailValid) {
      console.log('Email is valid:', email);
    } 
    else {
      console.log('Email is invalid:', email);
    }
    if (ispassValid) {
      console.log('password is valid:', pass);
    } 
    else {
      console.log('password is invalid:', pass);
    }
  };
  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the input email against the regex
    return emailRegex.test(email);
  }
  const validatePassword = (pass) => {
    // Password validation rules
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // Test the input password against the rules
    return (
      pass.length >= 8 && passwordRegex.test(pass)
    );
  };
  const emailHandler = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setemailIsValid(validateEmail(inputValue));
  }
  const passHandler = (e) => {
    const inputValue = e.target.value;
    setPass(inputValue);
    setpassIsValid(validatePassword(inputValue));
  }
  return (
    <>
      <div className="container mt-5 card-body my-2 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Login User</div>
        <div className=" my-2">
          <form onSubmit={validationHandler}>
            <div className="form-group my-2">
              <label htmlFor="email">Email address</label>
              <input onChange={emailHandler} type="text" value={email} className="form-control" id="email" placeholder="Enter email" />
              <span>{!isemailValid && <p style={{ color: 'red' }}>Invalid email format</p>}</span>
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">Password</label>
              <input type="password" onChange={passHandler} value={pass}className="form-control" id="password" placeholder="Password" />
             <span>{!ispassValid && (<p style={{ color: 'red' }}>
                  Password must be at least 8 characters long and contain at
                  least one lowercase letter, one uppercase letter, and one numeric digit.
                </p>)}</span>
            </div>
            <div className=" my-2">
              <button type="submit" id="login" className="btn btn-primary">Login</button>

            </div>
          </form>

        </div>
      </div>
    </>
  )
}
