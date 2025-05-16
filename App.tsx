import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ArchitecturePage from './pages/ArchitecturePage';
import HowToBuildPage from './pages/HowToBuildPage';
import AboutPage from './pages/AboutPage';
import './App.css'; // General app styles

const App: React.FC = () => {
  // For a simple single-page scrollable website, we can render all sections.
  // If proper routing was needed, we'd use React Router here.
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        {/* Render sections sequentially for a single-page scroll experience */}
        {/* Each page component should have an id that matches the navigation hrefs */}
        <HomePage />
        <FeaturesPage />
        <ArchitecturePage />
        <HowToBuildPage />
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
