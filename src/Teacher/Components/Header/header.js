import React from "react";
import "../../Assets/Styles/header.css";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-title">
          <Link to="/" className="nav-title">
            JoGeek
          </Link>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/addexam">Add Exam</Link>&nbsp;
          <Link to="/studentlist">Student List</Link>&nbsp;&nbsp;
          <MdOutlineNotifications size={"1.5rem"} color={"white"} />
          &nbsp;
          <Link to="/profile">
            <CgProfile size={"1.5rem"} color={"white"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
