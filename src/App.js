import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Dynamically set favicon
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "./assets/Logo.png"; 
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
