import React from "react";
import "../../Assets/Styles/register.css";

const Register = ({
  formValues,
  handleChange,
  handleSubmit,
  error,
  imageUploadHandler,
}) => {
  return (
    <>
      <div class="container bg-white mt-sm-2">
        <div class="wrapper d-flex justify-content-center flex-column px-md-5 px-1">
          <div class="h3 text-center font-weight-bold">Register</div>
          <div class="row my-4">
            <div class="col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Type your name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.name}</p>
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              <label>Mail</label>
              <input
                type="mail"
                id="mail"
                placeholder="Type your mail."
                name="mail"
                value={formValues.mail}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.mail}</p>
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              <label>Age</label>
              <input
                type="number"
                id="age"
                placeholder="Type your age."
                name="age"
                value={formValues.age}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.age}</p>
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              <label>Phone</label>
              <input
                type="tel"
                id="number"
                placeholder="Type your phone number."
                name="number"
                value={formValues.number}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.number}</p>
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Type Your Password..."
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.password}</p>
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              <label>Conform Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Type Your Confirm Password..."
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error.confirmPassword}</p>
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              <label>Image</label>
              <input
                type="file"
                // id="file"
                accept="image/png, image/gif, image/jpeg"
                name="image"
                // value={formValues.image}
                onChange={imageUploadHandler}
              />
              <p style={{ color: "red" }}>{error.image}</p>
            </div>
            <div class="d-flex justify-content-end col-md-6">
              <button class="btn" onClick={handleSubmit}>
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
