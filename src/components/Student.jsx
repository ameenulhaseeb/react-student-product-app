import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Student = () => {
    const[inputData,setInputData] = useState(
        {
            name:"",
            admissionNo : "",
            rollNo : null,
            college : "",
            lastChgBy : null
        }
    )
    const dataOnchange=(evnt)=>{
        setInputData(
            {
                ...inputData,[evnt.target.name]:evnt.target.value   //... for perfomance (set only if change occur)
            }
        )

    }
    const submitValue = ()=>{
        //console.log(inputData);
        axios.post("http://localhost:8080/student/create",inputData).then(
            (response)=>{
                if (response.data=="success") {
                    alert("Successfully Added")
                    setInputData(  {
                        name:"",
                        admissionNo : "",
                        rollNo : null,
                        college : "",
                        lastChgBy : null
                    })

                } else {
                    alert("Error Occured")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <h3>Add Student</h3>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <label htmlFor="" className="form-label">Name</label>
               <input type="text" name='name' value={inputData.name} onChange={dataOnchange} className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Roll No.</label>
                <input type="text" name='rollNo' value={inputData.rollNo} onChange={dataOnchange} className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Admission No.</label>
               <input type="text" name='admissionNo' value={inputData.admissionNo} onChange={dataOnchange} className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">College Name</label>
                <input type="text" name='college' value={inputData.college} onChange={dataOnchange} className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
             <button className="btn btn-success" onClick={submitValue}>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Student
