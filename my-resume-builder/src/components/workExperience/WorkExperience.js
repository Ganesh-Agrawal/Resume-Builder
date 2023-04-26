import React, { useState } from 'react'
import AddWorkExperience from './AddWorkExperience';

export default function WorkExperience() {

    const [formData, setFormData] = useState({
        state: "",
        city: ""
    });
    const handleStateChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            state: value,
            city: "" // Reset city value when state changes
        });
    };

    const handleCityChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            city: value
        });
    };

    return (
        <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
            <div className="card-header my-2">Work Experience Details</div>
            <div>
                <form>
                    <div className="form-group input-group my-3">
                        <label className="input-group-text  form-control" htmlFor="workexperience">Work Experience</label>
                        <select className="form-control" value={formData.state} onChange={handleStateChange}>
                            <option value="">Select  Experience</option>
                            <option value="fresher">Fresher</option>
                            <option value="experienced">Experienced</option>
                        </select>
                    </div>
                    <div>
                        <div className="form-control" value={formData.city} onChange={handleCityChange}>
                            <div>
                                {formData.state === "experienced" && (
                                    <AddWorkExperience />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className=" my-2 mx-2">
                        <button type="submit" id="addeducation" className="mx-2 btn btn-info">Add Education</button>
                        <button type="submit" id="nextToskill" className="mx-2 btn btn-primary">Save and Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
