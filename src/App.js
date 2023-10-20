import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Banner from './Components/Header/Banner';
import ShopNowSection from './Components/Header/Banner_2';
import NewSectionfooter from './Components/Footer/Footer_newpart';
import Customer from './Components/Header/Customer';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <ShopNowSection />
      <Customer />
      <NewSectionfooter />
      <Footer />
    </Router>
  );
}

export default App;
