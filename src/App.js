import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Component/Navbarr';
import { Route, Routes } from 'react-router-dom';
import Gamelist from './Component/Gamelist';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="/" element={ <Gamelist/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
)
}

export default App;
