import React, { useState } from "react";

const FormWithDropdowns = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access formData.state and formData.city for form data
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        State:
        <select name="state" value={formData.state} onChange={handleStateChange}>
          <option value="">Select a state</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          {/* Add more states as needed */}
        </select>
      </label>
      <label>
        City:
        <select name="city" value={formData.city} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {formData.state === "CA" && (
            <>
              <option value="SF">San Francisco</option>
              <option value="LA">Los Angeles</option>
              {/* Add more cities for California */}
            </>
          )}
          {formData.state === "NY" && (
            <>
              <option value="NYC">New York City</option>
              <option value="ALB">Albany</option>
              {/* Add more cities for New York */}
            </>
          )}
          {/* Add more cities for other states */}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithDropdowns;
