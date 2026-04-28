import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Diensten', href: '/diensten' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-sm">
            <span className="text-white font-serif text-lg font-bold">E</span>
          </div>
          <span className="text-xl font-serif font-semibold tracking-tight text-brand-primary">
            ES Accountancy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors tracking-wide ${location.pathname === link.href ? 'text-brand-primary' : 'text-brand-text/80 hover:text-brand-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-8 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-lg font-medium text-brand-text"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
