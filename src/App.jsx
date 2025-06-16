
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

import SlideshowSection from './components/landing_page/SlideshowSection';
import Services from './components/landing_page/Services';
import StatsSection from './components/landing_page/StatsSection';
import StatsCounter from "./components/landing_page/StatsCounter";
import TestimonialsSection from './components/landing_page/TestimonialsSection';
import ClientsSection from './components/landing_page/ClientsSection';
import ExpertSection from './components/landing_page/ExpertSection';

import RMASection from './components/services/RMASection';
import MHealth from './components/services/MHealth';
import MentalHealthChart from "./components/services/MentalHealthChart";
import Wellness from './components/services/Wellness';
import WellnessChart from './components/services/WellnessChart';
import WellnessBarChart from './components/services/WellnessBarChart';

function HomePage() {
  return (
    <>
      <Header />
      <SlideshowSection />
      <StatsSection />
      <Services />
      <ExpertSection />
      <TestimonialsSection />
      <ClientsSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/rma" element={<RMASection />} />
      <Route path="/wellness" element={<Wellness/>}/>
      <Route path="/mhealth" element={<MHealth />} />
    </Routes>
  );
}

export default App;
