import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import WhyJoin from './pages/WhyJoin';
import Register from './pages/Register';
import Contact from './pages/Contact';
import SupernovaBackground from './components/SupernovaBackground';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SupernovaBackground />
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <div className="min-h-screen bg-transparent text-white">
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/why-join" element={<WhyJoin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;