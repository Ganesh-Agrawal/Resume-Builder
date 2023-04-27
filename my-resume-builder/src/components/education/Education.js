import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Education() {
  const [addEducation, setaddEducation] = useState([{ instituteName: '', university: '' }]);

  const instituteNameHandler = (e, index) => {
    const { value } = e.target;
    const updatedaddEducation = [...addEducation];
    updatedaddEducation[index].instituteName = value;
    setaddEducation(updatedaddEducation);
  };

  const universityHandler = (e, index) => {
    const { value } = e.target;
    const updatedaddEducation = [...addEducation];
    updatedaddEducation[index].university = value;
    setaddEducation(updatedaddEducation);
  };


  const addAnotherEducation = () => {
    setaddEducation([...addEducation, { instituteName: '', university: '' }]);
  };

  return (
    <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
    <div className="card-header my-2">Educational Details</div>
    <div>
       {addEducation.map((addEdu, index) => (
            <form key={index}>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor={`instituteName${index}`}>Organigation Name</label>
          <input type="text" className="form-control" onChange={(e) => instituteNameHandler(e, index)}
                  value={addEdu.instituteName}
          id={`instituteName${index}`} placeholder="Enter Institute Name" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor={`university${index}`}>Univercity Name</label>
          <input  onChange={(e) => universityHandler(e, index)}
                  value={addEdu.university} type="text" className="form-control" 
                  id={`university${index}`} placeholder="Enter University Name" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="degree">Degree </label>
          <input type="text" className="form-control" id="degree" placeholder="Enter Your Degree" />
        </div>
        <div className="form-group input-group my-3">
          <label className="input-group-text" htmlFor="endyear">End Year</label>
          <input type="date" className="form-control mx-1" id="endyear" placeholder="Select End Year" />
        </div>
        </form>
         ))}
        <div className=" my-2 mx-2">
          <button onClick={addAnotherEducation} type="submit" id="addeducation" className="mx-2 btn btn-info">Add Education</button>
          <Link to="/skills" type="submit" id="nextToskill" className="mx-2 btn btn-primary">Save and Next</Link>
        </div>
      
    </div>
  </div>
  )
}
