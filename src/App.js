
// import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import { useSelector } from 'react-redux';


function App() {
  const value = useSelector((state) => state.primary); 

  return (
    <div class={`color-${value}`}>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Navbar />} >
            <Route path="home" element={<Home />} />  
            <Route path="about" element={<About />} />  
          </Route>
          
        </Routes>
      </BrowserRouter>
		</div>


  );
}

export default App;
