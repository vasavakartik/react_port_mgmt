
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard2 } from './pages/Dashboard2';
import { AddUser } from './User/AddUser';
import { GetUser } from './User/GetUser';
import { Details } from './User/Details';
import {  UpdateUser } from './User/UpdateUser';




function App() {
  return (
    
    <div >
      <AddUser/>
      <GetUser/>
      <Details/>
      <UpdateUser/>
      <Routes>
        <Route path='/*' element={<Dashboard2/>}></Route>
        <Route path="User/UpdateUser/:userId" element={<UpdateUser/>}></Route>
      </Routes>
      
    </div>
   
   
   
    
  );
}

export default App;
