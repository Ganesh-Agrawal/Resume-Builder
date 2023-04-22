import React,{useState} from 'react'

 


export default function CreateNewResume() {
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
    <>
      <div className="container mt-3 ml-auto card-body my-3 card col-md-6 row justify-content-center">
        <div className="my-2 text-center "><h3>Create New Resume</h3></div>
        <div className="card-header my-2">Personal Details</div>
        <div>
          <form>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="fname">First Name</label>
              <input type="text" className="form-control" id="fname" placeholder="Enter First Name" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="email">Email Address</label>
              <input type="text" className="form-control" id="email" placeholder="Enter Email Address" />
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="mob">Mobile Number</label>
              <input type="tel" className="form-control" id="mob" placeholder="Enter Mobile Number" />
            </div>
            <div className="input-group my-3">
              <span className="input-group-text">Address</span>
              <textarea className="form-control" id="address" placeholder="Enter Your Address"></textarea>
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text  form-control" htmlFor="gender">State / City</label>
              <select className="form-control" value={formData.state} onChange={handleStateChange}>
                <option value="">Select  state</option>
                <option value="raj">Rajasthan</option>
                <option value="mh">Maharashtra</option>
                {/* Add more states as needed */}
              </select>
              <select className="form-control" value={formData.city} onChange={handleCityChange}>
                <option value="">Select  City</option>
                {formData.state === "raj" && (
                  <>
                    <option value="jp">Jaipur</option>
                    <option value="kota">Kota</option>
                    {/* Add more cities for California */}
                  </>
                )}
                {formData.state === "mh" && (
                  <>
                    <option value="bombay">Bombay</option>
                    <option value="pune">Pune</option>
                    {/* Add more cities for New York */}
                  </>
                )}
                {/* Add more cities for other states */}
              </select>
            </div>
            <div className="form-group input-group my-3">
              <label className="input-group-text" htmlFor="pincode">Postal Code</label>
              <input type="text" className="form-control" id="pincode" placeholder="Enter You Area Pincode" />
            </div>
            <div className=" my-2">
              <button type="submit" id="signup" className="btn btn-primary">Save and Next</button>
            </div>
          </form>

        </div>
      </div>
    </>

  )
}
