import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthPage from './pages/HealthPage';
import KidsPage from './pages/KidsPage';
import MindsetPage from './pages/MindsetPage';
import TechPage from './pages/TechPage';
import TravelPage from './pages/TravelPage';



function App() {
  return (
    <BrowserRouter basename="/focustube">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health/:section" element={<HealthPage />} />
        <Route path="/kids/:section" element={<KidsPage />} />
        <Route path="/mindset/:section" element={<MindsetPage />} />
        <Route path="/tech/:section" element={<TechPage />} />
        <Route path="/travel/:section" element={<TravelPage />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
