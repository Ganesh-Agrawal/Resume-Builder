import React from 'react'

export default function SignUp() {

  const dataHandler = () => {

  }

  return (
    <>
      <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Create New User</div>
        <div className=" my-3">
          <form>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="fname">First Name</label>
              <input type="text" className="form-control" id="fname" placeholder="Enter First Name" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text  form-control" htmlFor="gender">Gender</label>
              <input className="mx-3 form-check-input" type="radio" id="male" />Male
              <input className=" mx-3 form-check-input" type="radio" id="female" /> Female
              <span className="  mx-5" ></span>
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="email">Email Address</label>
              <input type="text" className="form-control" id="email" placeholder="Enter Email Address" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="mob">Mobile Number</label>
              <input type="mob" className="form-control" id="mob" placeholder="Enter Mobile Number" />
            </div>
            <div className="input-group my-3">
              <span className="input-group-text">Address</span>
              <textarea className="form-control" id="address" placeholder="Enter Your Address"></textarea>
            </div>
            <div className=" my-2">
              <button type="submit" onClick={dataHandler} id="signup" className="btn btn-primary">Sign Up</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
