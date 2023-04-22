import React, { useState } from 'react';

export default function AddEducation() {
  const [logins, setLogins] = useState([{ email: '', password: '' }]);

  const emailHandler = (e, index) => {
    const { value } = e.target;
    const updatedLogins = [...logins];
    updatedLogins[index].email = value;
    setLogins(updatedLogins);
  };

  const passHandler = (e, index) => {
    const { value } = e.target;
    const updatedLogins = [...logins];
    updatedLogins[index].password = value;
    setLogins(updatedLogins);
  };


  const addAnotherLogin = () => {
    setLogins([...logins, { email: '', password: '' }]);
  };

  return (
    <>
      <div className="container mt-5 card-body my-2 card col-md-6 row justify-content-center">
        <div className="card-header my-2">Login User</div>
        <div className="my-2">
          {logins.map((login, index) => (
            <form key={index}>
              <div className="form-group my-2">
                <label htmlFor={`email${index}`}>Email address</label>
                <input onChange={(e) => emailHandler(e, index)}
                  value={login.email} type="email" className="form-control"
                  id={`email${index}`} placeholder="Enter email" />
              </div>
              <div className="form-group my-2">
                <label htmlFor={`password${index}`}>Password</label>
                <input onChange={(e) => passHandler(e, index)}
                  value={login.password} type="password"
                  className="form-control" id={`password${index}`} placeholder="Password" />
              </div>
            </form>
          ))}
        </div>
        <div className="my-2">
          <button onClick={addAnotherLogin} className="btn btn-secondary"> Add Another </button>
          <button className="btn btn-primary mx-2"> Login </button>
        </div>
      </div>
    </>
  );
}
