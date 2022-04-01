
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import UserSubs from './components/UserSubs';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Logout } from './components/Logout';
import { Profile } from './components/Profile';
import Dash2 from './pages/Dash2';
import { AddRole } from './Role/AddRole';
import { GetRole } from './Role/GetRole';
import { UpdateRole } from './Role/UpdateRole';

function App() {
  return (
    
     <div className='wrapper' >
   <Sidebar/>

   <div className="main">
    <Navbar/>
    <main className="content">
				<div className="container-fluid p-0">
          
          <Routes>
            <Route path='/Dash' element={<Dashboard/>}></Route>
            <Route path='/Subs' element={<UserSubs/>}></Route>
            <Route path='/login' element={<Signin/>}></Route>
            <Route path='/Ragister' element={<Signup/>}></Route>
            <Route path='/Logout' element={<Logout/>}></Route>
            <Route path='/Prof' element={<Profile/>}></Route>
            <Route path='/Role' element={<AddRole/>}></Route>
            <Route path='/GetRole' element={<GetRole/>}></Route>
            <Route path="/getrole/updaterole/:id" element={<UpdateRole />}></Route>
          </Routes>
          </div>
          </main>
    <Footer/>
   </div>
   </div> 
  
   
   
   
    
  );
}

export default App;
