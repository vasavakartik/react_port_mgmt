
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard2 } from './pages/Dashboard2';










function App() {
  return (
    
    <div >

     
      <Routes>
      <Route path='*' element={<Dashboard2/>}></Route>  
      </Routes>
      
      
    </div>
   
   
   
    
  );
}

export default App;
