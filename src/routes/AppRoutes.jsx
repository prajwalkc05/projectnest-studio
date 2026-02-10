import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import OurWorks from '../pages/OurWorks';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-works" element={<OurWorks />} />
    </Routes>
  );
};

export default AppRoutes;
