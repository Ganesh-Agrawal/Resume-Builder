import React,{useState} from 'react'

export default function AddWorkExperience() {
  const [addWorkExp, setaddWorkExp] = useState([{ compName: '' }]);

  const companyNameHandler = (e, index) => {
    const { value } = e.target;
    const updatedaddWorkExp = [...addWorkExp];
    updatedaddWorkExp[index].compName = value;
    setaddWorkExp(updatedaddWorkExp);
  };
  
  const addAnotherWork = () => {
    setaddWorkExp([...addWorkExp, { compName: '' }]);
  };

  return (
    <>
     {addWorkExp.map((addExp, index) => (
            <form key={index}>
      <div className="form-group input-group my-3">
        <label className="input-group-text" htmlFor="compName">Company Name</label>
        <input type="text" className="form-control" onChange={(e) => companyNameHandler(e, index)}
          value={addExp.compName} id={`compName${index}`} placeholder="Enter Company Name" />
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
      </form>
         ))}
      <div className=" my-4 mx-2">
        <button type="submit" id="addworkexperienceHandler" onClick={addAnotherWork} className="mx-2 btn btn-info">Add Experience</button>
        <button type="submit" id="removeworkexperienceHandler" className="mx-2 btn btn-info">Remove Experience</button>
      </div>
    </>
  )
}
