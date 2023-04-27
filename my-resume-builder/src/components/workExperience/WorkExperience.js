import React, { useState } from 'react'
import AddWorkExperience from './AddWorkExperience';
import {Link} from 'react-router-dom'

export default function WorkExperience() {

    const [selectExperience, setSelectedExperience] = useState({ experienced: ""});
    const handleExperienceChange = (event) => {
        const { value } = event.target;
        setSelectedExperience({
            ...selectExperience,
            experienced: value
        });
    };

return (
    <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Work Experience Details</div>
        <div>
            <form>
                <div className="form-group input-group my-3">
                    <label className="input-group-text  form-control" htmlFor="workexperience">Work Experience</label>
                    <select className="form-control" value={selectExperience.experienced} onChange={handleExperienceChange}>
                        <option value="">Select  Experience</option>
                        <option value="fresher">Fresher</option>
                        <option value="experienced">Experienced</option>
                    </select>
                </div>
                <div>
                    <div className="form-control" value={selectExperience.experienced} onChange={handleExperienceChange}>
                        <div>
                            {selectExperience.experienced === "experienced" && (
                                <AddWorkExperience />
                            )}
                        </div>
                    </div>
                </div>

                <div className=" my-2 mx-2">
                    <button type="submit" id="addeworkexperience" className="mx-2 btn btn-info">Add Experience</button>
                    <Link to="/viewresume" type="submit" id="nextToview" className="mx-2 btn btn-primary">Create</Link>
                </div>
            </form>
        </div>
    </div>
)
}
