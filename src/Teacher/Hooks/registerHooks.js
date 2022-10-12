import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Services/authServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../Components/Register/register";

const RegisterFunction = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    mail: "",
    age: "",
    number: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError({});
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const imageUploadHandler = (e) => {
    console.log("console.log....", e.target.files[0]);
    setFormValues({ ...formValues, image: e.target.files[0] });
  };

  const isValid = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const phoneRegex = /^\d{10}$/;
    const ageRegex = /^\d{2}$/;
    const decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const formData = true;
    switch (true) {
      case !formValues.name:
        setError({ name: "Name Is Required!" });
        formData = false;
        break;
      case !formValues.mail:
        setError({ mail: "Mail field Is Required!" });
        formData = false;
        break;
      case formValues.mail && !regex.test(formValues.mail):
        setError({ mail: "Please enter valid mail address!" });
        formData = false;
        break;
      case !formValues.age:
        setError({ age: "Please Fill age" });
        formData = false;
        break;
      case formValues.age && !ageRegex.test(formValues.age):
        setError({ age: "Please Fill valid age" });
        formData = false;
        break;
      case !formValues.number:
        setError({ number: "Please Fill Number" });
        formData = false;
        break;
      case formValues.number && !phoneRegex.test(formValues.number):
        setError({ number: "Please Fill valid Number" });
        formData = false;
        break;
      case !formValues.password:
        setError({ password: "Password field is required!" });
        formData = false;
        break;
      case formValues.password && !decimal.test(formValues.password):
        setError({
          password:
            "8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
        });
        formData = false;
        break;
      case !formValues.confirmPassword:
        setError({ confirmPassword: "Confirm Password field is required!" });
        formData = false;
        break;
      case formValues.confirmPassword !== formValues.password:
        setError({ confirmPassword: "Password not Matched" });
        formData = false;
        break;
      case !formValues.image:
        setError({ image: "Image Is Required!" });
        formData = false;
        break;
      default:
      // formData = true;
    }
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const formdata = new FormData();
      formdata.append("image", formValues.image, formValues.image.name);
      formdata.append("name", formValues.name);
      formdata.append("mail", formValues.mail);
      formdata.append("age", formValues.age);
      formdata.append("number", formValues.number);
      formdata.append("password", formValues.password);
      formdata.append("confirmPassword", formValues.confirmPassword);
      const res = await register(formdata, formValues);
      if (res.status == 200) {
        navigate("/login");
        toast("Saved Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(res.message, {
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
      <Register
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        imageUploadHandler={imageUploadHandler}
      />
    </>
  );
};

export default RegisterFunction;
