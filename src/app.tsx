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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <DotLottieReact
            src="https://lottie.host/549bebc2-c6dc-4f97-8610-7d9df7b1f82a/D0hPCZlocb.json"
            loop
            autoplay
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      )}
      {!isLoading && (
        <div className="min-h-screen bg-black text-white">
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