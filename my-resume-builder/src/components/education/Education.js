import React from 'react'

export default function Education() {
  return (
    <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
    <div className="card-header my-2">Educational Details</div>
    <div>
      <form>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="institutename">Organigation Name</label>
          <input type="text" className="form-control" id="institutename" placeholder="Enter Institute Name" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="universityname">Univercity Name</label>
          <input type="text" className="form-control" id="universityname" placeholder="Enter University Name" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="degree">Degree </label>
          <input type="text" className="form-control" id="degree" placeholder="Enter Your Degree" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="endyear">End Year</label>
          <input type="date" className="form-control mx-1" id="endyear" placeholder="Select End Year" />
        </div>
        <div className=" my-2 mx-2">
          <button type="submit" id="addeducation" className="mx-2 btn btn-info">Add Education</button>
          <button type="submit" id="nextToskill" className="mx-2 btn btn-primary">Save and Next</button>
        </div>
      </form>
    </div>
  </div>
  )
}
