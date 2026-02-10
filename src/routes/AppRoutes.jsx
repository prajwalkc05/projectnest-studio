import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import OurWorks from '../pages/OurWorks';
import Academic from '../pages/Academic';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-works" element={<OurWorks />} />
      <Route path="/academic" element={<Academic />} />
    </Routes>
  );
};

export default AppRoutes;
