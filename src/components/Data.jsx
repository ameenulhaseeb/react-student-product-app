import React, { useState } from 'react'
import Navbar from './Navbar'
import Todo from './Todo';

const Data = () => {
   // const [name,setName]=useState("Ameen");
    const [data,setData]=useState([
        {name:"Ameen",age:33,mobile:9746103809},
        {name:"Haseeb",age:30,mobile:1234567889},
        {name:"Joy",age:40,mobile:852741963},
        {name:"Biyas",age:35,mobile:741852963},

    ]);
   /* const changeMyName=()=>{
        setName("Haseeb");   
     }*/
  return (
    <div>
        <Navbar/>
      <div className="container">
        <h3>Data</h3>
        {/* <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">{name}</label>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={changeMyName}>Change Name</button>
            </div>
        </div> */}
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile No.</th>
    </tr>
  
  </thead>
  <tbody>
{data.map(
    (value,index)=>{
    return  <tr>
    <th scope="row">{index+1}</th>
    <td>{value.name}</td>
    <td>{value.age}</td>
    <td>{value.mobile}</td>
  </tr>
})}
    
  </tbody>
</table>
      </div>


      <Todo/>
    </div>
  )
}

export default Data
