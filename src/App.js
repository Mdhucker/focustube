import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Children from './pages/Children';
// import MindSet from './pages/MindSet';
// import Technology from './pages/Technology';
// import Traveling from './pages/Traveling';
// import Health from './pages/Health';
// import Animals from './pages/Animals';

// import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename="/focustube">
      <Routes>
        <Route path="/" element={<Home />} />
        

        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
