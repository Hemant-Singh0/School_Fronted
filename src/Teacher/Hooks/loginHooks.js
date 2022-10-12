import React, { useState } from "react";
import Login from "../Components/Login/login";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/authServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginFunction = () => {
  const [formValues, setFormValues] = useState({ mail: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError({});
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValid = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let formData = true;
    switch (true) {
      case !formValues.mail:
        setError({ mail: "Mail field Is Required!" });
        formData = false;
        break;
      case formValues.mail && !regex.test(formValues.mail):
        setError({ mail: "Please enter valid Mail address!" });
        formData = false;
        break;
      case !formValues.password:
        setError({ password: "Password field is required!" });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await loginUser(formValues);
      console.log(">>>>>>>>>>::::::::>>>>>>>>>", res);
      if (res.status == 200) {
        localStorage.setItem("Teacher-Token", JSON.stringify(res.data));
        toast("LogIn", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  return (
    <>
      <Login
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </>
  );
};

export default LoginFunction;
