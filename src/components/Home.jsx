import React from 'react'
import Navbar from './Navbar'
import Student from './Student'
import Liststudent from './Liststudent'
import Searchstudent from './Searchstudent'

const Home = () => {
  return (
    <div>
      <div className="container">
     <Navbar/>
     <Student/>
     <Liststudent/>
     <Searchstudent/>
      </div>
    </div>
  )
}

export default Home
