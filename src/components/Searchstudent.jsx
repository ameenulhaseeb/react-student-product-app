import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Searchstudent = () => {
    const myNavigation = useNavigate();
  const [searchKey, setSearckKey] = useState({ admissionNo: "" });
  const [searchResult, setSearckResult] = useState({
    id: null,
    name: "",
    admissionNo: "",
    rollNo: null,
    college: "",
    lastChgBy: null,
    lastChgDate: null,
  });
  const searchDataOnchange = (event) => {
    setSearckKey({
      ...searchKey,
      [event.target.name]: event.target.value,
    });
  };
  const submitValue = () => {
    axios
      .post("http://localhost:8080/student/fetchStudent", searchKey)
      .then((response) => {
        if (response.data.status == "valid") {
          setSearckResult(response.data.data);
        } else {
          alert("Invalid admission no");
          myNavigation("/listStudent");
          sessionStorage.setItem("name","Ameen")
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Search Student</h3>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="frm-label">
              Admission No.
            </label>
            <input
              type="text"
              name="admissionNo"
              value={searchKey.admissionNo}
              onChange={searchDataOnchange}
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-primary" onClick={submitValue}>
              SEARCH
            </button>
          </div>
        </div>
        <div className="row">
          <div className="div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={searchResult.name}
              className="form-control"
            />
          </div>
          <div className="div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Roll No.
            </label>
            <input
              type="text"
              value={searchResult.rollNo}
              className="form-control"
            />
          </div>
          <div className="div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Admission No.
            </label>
            <input
              type="text"
              value={searchResult.admissionNo}
              className="form-control"
            />
          </div>
          <div className="div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              College
            </label>
            <input
              type="text"
              value={searchResult.college}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchstudent;
