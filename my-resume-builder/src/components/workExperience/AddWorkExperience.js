import React from 'react'

export default function AddWorkExperience() {
  return (
    <>
    <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor="companeyname">Company Name</label>
    <input type="text" className="form-control" id="companeyname" placeholder="Enter Company Name" />
  </div>
  <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor="designation">Designation</label>
    <input type="text" className="form-control" id="designation" placeholder="Enter your Designation" />
  </div>
  <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor="startyear">Start Year</label>
    <input type="date" className="form-control mx-1" id="startyear" placeholder="Select Start Year" />
  </div>
  <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor="endyear">End Year</label>
    <input type="date" className="form-control mx-1" id="endyear" placeholder="Select End Year" />
  </div>
 </>
  )
}
