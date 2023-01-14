import './App.css';
import About from './pages/About.js';
import Cinematography from './pages/Cinematography.js';
import Filmography from './pages/Filmography.js';
import Writing from './pages/Writing.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route basename={process.env.PUBLIC_URL} path="/" element={<About/>} />
      <Route basename={process.env.PUBLIC_URL} path="/about" element={<About/>} />
      <Route basename={process.env.PUBLIC_URL} path="/cinematography" element={<Cinematography/>} />
      <Route basename={process.env.PUBLIC_URL} path="/writing" element={<Writing/>} />
      <Route basename={process.env.PUBLIC_URL} path="/filmography" element={<Filmography/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
