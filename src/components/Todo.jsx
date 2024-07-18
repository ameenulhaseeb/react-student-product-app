import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Todo = () => {
    const[userData,setData]=useState([])
    const fetchData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
        setData(response.data);
        }
    )
    }
   
    React.useEffect(
        ()=>{fetchData()},[]   //[] for inactivate multiple calls a
    )
  return (
    <div>
      <div className="container">
      <h3>TODO</h3>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User Id</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
    </tr>
  
  </thead>
  <tbody>
{userData.map(
    (val,index)=>{
        return <tr>
        <td>{val.id}</td>
        <td>{val.userId}</td>
        <td>{val.title}</td>
        <td>{val.completed ? <span className="badge text-bg-success">Completed</span> : <span className="badge text-bg-danger">Failed</span>}</td>
      </tr>
    }
)}
    </tbody>
    </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
