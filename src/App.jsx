import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
