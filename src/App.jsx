// Modern App.jsx with React Router and new design
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import PlacementsPage from './pages/PlacementsPage/PlacementsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/students-work" element={<CoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;