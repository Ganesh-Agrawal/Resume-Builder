import React ,{useState}from 'react'

export default function Login() {

const [email,setEmail]= useState();
const [pass,setPass] = useState();

  const jqueruCode = (e)=>{
     console.log(email);
     console.log(pass)
    
  };
const emailHandler =(e)=>{
  setEmail(e.target.value);
}

const passHandler =(e)=>{
  setPass(e.target.value);
}
  return (
    <>
      <div className="container mt-5 card-body my-2 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Login User</div>
        <div className=" my-2">
          <form>
            <div className="form-group my-2">
              <label htmlFor="email">Email address</label>
              <input onChange={emailHandler} type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">Password</label>
              <input type="password" onChange={passHandler} className="form-control" id="password" placeholder="Password" />
            </div>
            <div className=" my-2">
              <button type="submit" onClick={jqueruCode} id="login" className="btn btn-primary">Login</button>
            </div>
          </form>

        </div>
      </div>
 </>
  )
}
