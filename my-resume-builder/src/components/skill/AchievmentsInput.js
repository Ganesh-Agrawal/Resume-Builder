import React from 'react'

export default function AchievmentsInput(props) {
  return (
    <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor={props.hf}>Achievments</label>
    <input type="text"  onChange ={props.achievmentsNameHandler}  value={props.value}
     className="form-control" id={props.hf} placeholder="Enter Your Achievments" />
  </div>
   )
}
