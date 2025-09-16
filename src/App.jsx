// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetails'; // Add this import
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-800 text-gray-400 font-chakra">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Recipe-Finder/" element={<Home />} />
            <Route path="/Recipe-Finder/recipes" element={<Recipes />} />
            <Route path="/Recipe-Finder/recipes/:id" element={<RecipeDetail />} /> {/* Add this route */}
            <Route path="/Recipe-Finder/about" element={<About />} />
            <Route path="/Recipe-Finder/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;