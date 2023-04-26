import AchievmentsInput from "./AchievmentsInput";
import SkillInput from "./SkillInput";

export default function Skills() {
  return (
    <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Skills and Achievments</div>
        <div>
          <form>
           


           
            <SkillInput/>
            <div className=" my-2">
              <button type="submit" id="addskill" className="mx-4 btn btn-light">Add Skills</button>
            </div>
            <AchievmentsInput/>
            <div className=" my-2">
              <button type="submit" id="addachievment" className="mx-4 btn btn-light">Add Achievment</button>
            </div>
            <div className=" my-2">
              <button type="submit" id="nextTowork" className="mx-2 btn btn-primary">Save and Next</button>
            </div>
          </form>
        </div>
      </div>
  )
}
