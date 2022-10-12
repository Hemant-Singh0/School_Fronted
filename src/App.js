import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Public from "./Teacher/hoc/Public/publicRauter";
import Private from "./Teacher/hoc/Private/privateRauter";
import Login from "./Teacher/Hooks/loginHooks";
import Register from "./Teacher/Hooks/registerHooks";
import Home from "./Teacher/Containers/Home/home";
import AddTest from "./Teacher/Containers/Test/addTest";
import StudentList from "./Teacher/Containers/StudentList/studentList";
import Profile from "./Teacher/Containers/Profile/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="/login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="/addexam"
            element={
              <Private>
                <AddTest />
              </Private>
            }
          />
          <Route
            path="/studentlist"
            element={
              <Private>
                <StudentList />
              </Private>
            }
          />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
