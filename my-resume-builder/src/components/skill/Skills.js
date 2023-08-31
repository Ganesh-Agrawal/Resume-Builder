import AchievmentsInput from "./AchievmentsInput";
import SkillInput from "./SkillInput";
import { Link } from 'react-router-dom'
import React, { useState } from "react";

export default function Skills(props) {
  const [addskill, setaddSkill] = useState([{ skillName: '' }]);
  const [addAchiv,setAchiv] =useState([{achivName:''}])

  const skillNameHandler = (e, index) => {
    const { value } = e.target;
    const updatedaddskill = [...addskill];
    updatedaddskill[index].skillName = value;
    setaddSkill(updatedaddskill);
  };
  const addAnotherSkill = () => {
    setaddSkill([...addskill, { achivName: '' }]);
  };

  const achievmentsNameHandler = (e, index) => {
    const { value } = e.target;
    const updatedaddAchiv = [...addAchiv];
    updatedaddAchiv[index].achivName = value;
    setAchiv(updatedaddAchiv);
  };
  const addAnotherAchievments = () => {
    setAchiv([...addAchiv, { achivName: '' }]);
  };
  const handleRemoveSkills = (index) => {
    const values = [...addskill];
    values.splice(index, 1);
    setaddSkill(values);
  };

  const handleRemoveAchiv = (index) => {
    const values = [...addAchiv];
    values.splice(index, 1);
    setAchiv(values);
  };

  return (
    <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
      <div className="card-header my-2">Skills and Achievments</div>
      <div>
        {addskill.map((addskills, index) => (
          <form key={index}>
            <SkillInput hf={`skillName${index}`} skillNameHandler={(e) => skillNameHandler(e, index)} value={addskills.skillName} />
          </form>
        ))}
          <div className=" my-2">
            <button onClick={addAnotherSkill} type="submit" id="addskill" className="mx-4 btn btn-light">Add Skills</button>
            <button type="submit" id="removeskill" onClick={handleRemoveSkills} className="mx-4 btn btn-light">Remove Skills</button>
          </div>
          {addAchiv.map((addAchivs, index) => (
          <form key={index}>
            <AchievmentsInput  hf={`achivName${index}`} 
              achievmentsNameHandler={(e) => achievmentsNameHandler(e, index)} value={addAchivs.achivName}  />
          </form>
        ))}
            
          <div className=" my-2">
            <button type="submit"  onClick={addAnotherAchievments} id="addachievment" className="mx-4 btn btn-light">Add Achievment</button>
            <button type="submit"  onClick={handleRemoveAchiv}id="addremoveAchiv" className="mx-2 btn btn-light">Remove Achievments</button>
          </div>
          <div className=" my-4 mx-3">
          <Link to="/education" type="submit" id="prevToeducation" className="mx-4 my-3 btn btn-primary">Previous</Link>
          <Link to="/workexperience" type="submit" id="nextTowork" className="mx-4 my-3 btn btn-primary">Save and Next</Link>
          </div>
      </div>
    </div>
  )
}
