import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import QuickFactsBar from './components/QuickFactsBar';
import GallerySection from './components/GallerySection';
import AboutProperty from './components/AboutProperty';
import AmenitiesGrid from './components/AmenitiesGrid';
import LocationHighlights from './components/LocationHighlights';
import CallToActionFooter from './components/CallToActionFooter';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

// SEO Component for dynamic meta tags
const SEOHead: React.FC<{ title?: string; description?: string; canonical?: string }> = ({ 
  title = "Kohomba Gaha Residencies - Luxury Short-term Rental in Colombo 7",
  description = "Modern urban oasis in prestigious Colombo 7. Luxury 3-bedroom home with tropical charm and city convenience. Book your perfect Sri Lankan getaway.",
  canonical = "https://kohombagaha.com"
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null;
};

// Scroll to hash on route change
const ScrollToHash: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  
  return null;
};

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-50">
      <SEOHead />
      <ScrollToHash />
      <Navbar />
      <HeroSection />
      <QuickFactsBar />
      <GallerySection />
      <AboutProperty />
      <AmenitiesGrid />
      <LocationHighlights />
      <CallToActionFooter />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={
        <>
          <SEOHead 
            title="About Kohomba Gaha Residencies - Luxury Accommodation Details"
            description="Learn more about our luxury 3-bedroom home in Colombo 7. Discover amenities, location highlights, and contact information for your perfect Sri Lankan stay."
            canonical="https://kohombagaha.com/about"
          />
          <AboutPage />
        </>
      } />
      <Route path="/booking" element={
        <>
          <SEOHead 
            title="Book Your Stay - Kohomba Gaha Residencies | Luxury Colombo 7 Rental"
            description="Reserve your luxury stay at Kohomba Gaha Residencies. Easy booking process for our premium 3-bedroom home in prestigious Colombo 7, Sri Lanka."
            canonical="https://kohombagaha.com/booking"
          />
          <BookingPage />
        </>
      } />
    </Routes>
  );
};

export default App;