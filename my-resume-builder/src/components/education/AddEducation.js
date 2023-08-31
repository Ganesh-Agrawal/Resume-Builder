import React, { useState } from 'react';

export default function AddEducation() {
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
    <>
      <div className="container mt-5 card-body my-2 card col-md-6 row justify-content-center">
        <div className="card-header my-2"></div>
        <div className="my-2">
          {addEducation.map((addEdu, index) => (
            <form key={index}>
              <div className="form-group my-2">
                <label htmlFor={`instituteName${index}`}>instituteName address</label>
                <input onChange={(e) => instituteNameHandler(e, index)}
                  value={addEdu.instituteName} type="email" className="form-control"
                  id={`instituteName${index}`} placeholder="Enter instituteName" />
              </div>
              <div className="form-group my-2">
                <label htmlFor={`university${index}`}>university</label>
                <input onChange={(e) => universityHandler(e, index)}
                  value={addEdu.university} type="text"
                  className="form-control" id={`university${index}`} placeholder="university" />
              </div>
              
            </form>
          ))}
        </div>
        <div className="my-2">
          <button onClick={addAnotherEducation} className="btn btn-secondary"> Add Another </button>
          <button className="btn btn-primary mx-2"> Login </button>
        </div>
      </div>
    </>
  );
}
