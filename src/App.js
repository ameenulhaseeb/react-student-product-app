import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Student from './components/Student';
import Liststudent from './components/Liststudent';
import Searchstudent from './components/Searchstudent';
import Data from './components/Data';
import ViewProducts from './components/ViewProducts';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Student/>}></Route>
    <Route path='/listStudent' exact element={<Liststudent/>}></Route>
    <Route path='/searchStudent' exact element={<Searchstudent/>}></Route>
    <Route path='/data' exact element={<Data/>}></Route>
    <Route path='/products' exact element ={<ViewProducts/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
