import About from './pages/About.js';
import Work from './pages/Work.js'
import Thoughts from './pages/Thoughts';
import Navbar from './components/Navbar.js';
import { HashRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Work/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/thoughts" element={<Thoughts/>} />
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
