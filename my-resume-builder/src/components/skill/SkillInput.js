import React ,{useState} from 'react'

export default function SkillInput(props) {
    return (
    <div className="form-group input-group my-3">
    <label className="input-group-text" htmlFor={props.hf}>Skills</label>
    <input  onChange ={props.skillNameHandler}  value={props.value}
     type="text" className="form-control" id={props.hf} placeholder="Enter Your Skill" />
  </div>
  )
}
