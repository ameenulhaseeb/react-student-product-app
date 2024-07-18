import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Liststudent = () => {
    const[students,setStudents] = useState([])
const fetchAllStudents= ()=>{
    axios.get("http://localhost:8080/student/fetchAll").then(
        (response)=>{
            setStudents(response.data)
        }
    )
}
React.useEffect(()=>{fetchAllStudents()},[])
  return (
    <div>
        <Navbar/>
    <div className='container'>
        <h3>List Student{sessionStorage.getItem("name")}</h3>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Roll No.</th>
      <th scope="col">Admission No.</th>
      <th scope="col">College Name</th>
    </tr>
  </thead>
  <tbody>
    {students.map((value,index)=>{
        return <tr>
        <th scope="row">{index+1}</th>
        <td>{value.name}</td>
        <td>{value.rollNo}</td>
        <td>{value.admissionNo}</td>
        <td>{value.college}</td>
      </tr>
    })}

   
  </tbody>
</table>
            </div>
        </div>
   
    </div>
    </div>
  )
}

export default Liststudent
