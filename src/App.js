import './App.css';
import About from './pages/About.js';
import Cinematography from './pages/Cinematography.js';
import Filmography from './pages/Filmography.js';
import Writing from './pages/Writing.js';
import Navbar from './components/Navbar.js';
import { HashRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cinematography" element={<Cinematography/>} />
      <Route path="/writing" element={<Writing/>} />
      <Route path="/filmography" element={<Filmography/>} />
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
