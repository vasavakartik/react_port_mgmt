
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserSubs from './components/UserSubs';
import Signin from './components/Signin';

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
            <Route path='/Form' element={<Login/>}></Route>
            <Route path='/Subs' element={<UserSubs/>}></Route>
            <Route path='/login' element={<Signin/>}></Route>
          </Routes>
          </div>
          </main>
    <Footer/>
   </div>
    </div>
  );
}

export default App;
