import './App.css';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Magic from './Components/Magic';
import Navbar from './Components/Navbar';
import SectionPage from './Components/SectionPage';
import SupportPage from './Components/SupportPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Magic />
      <SectionPage />
      <SupportPage />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
