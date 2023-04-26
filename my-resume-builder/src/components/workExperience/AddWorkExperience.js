import React from 'react'

export default function AddWorkExperience() {
  return (
    <>
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
 </>
  )
}
