import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/material/Header';
import Footer from './components/material/Footer';
import StoryModal from './components/material/StoryModal';
import ContactDrawer from './components/material/ContactDrawer';
import AboutModal from './components/material/AboutModal';
import VincentIntro from './components/material/VincentIntro';

// Dedicated Pages
import HomePage from './pages/HomePage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import WhitepapersPage from './pages/WhitepapersPage';
import FeasibilityPage from './pages/FeasibilityPage';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [initialMethodology, setInitialMethodology] = useState('');

  const handleOpenContact = (methodology = '') => {
    setInitialMethodology(methodology);
    setIsContactOpen(true);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      {/* CINEMATIC NETFLIX-STYLE OPENING INTRO (PEARL WHITE 'V' & NEON BLUE RIBBONS) */}
      {showIntro && (
        <VincentIntro onComplete={() => setShowIntro(false)} />
      )}

      <div className="min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-black selection:text-white relative flex flex-col justify-between">
        
        {/* 1. GLOBAL MEGA-MENU HEADER */}
        <Header
          onOpenContact={() => handleOpenContact('')}
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* 2. MAIN ROUTED VIEWS */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage
                  onOpenContact={handleOpenContact}
                  onOpenAbout={() => setIsAboutOpen(true)}
                  onSelectStory={(story) => setSelectedStory(story)}
                  onSelectArticle={(article) => {
                    setSelectedStory({
                      id: article.id,
                      brand: article.category,
                      title: article.title,
                      type: 'image',
                      mediaSrc: article.bgImage,
                      category: article.category,
                      results: 'Proprietary Research Dataset & Forecast',
                      fullSummary: `${article.title}. ${article.excerpt} Vincent Research conducts continuous quantitative pulse surveys across our 40M+ global panel network to deliver statistical certainty to enterprise strategy boards.`
                    });
                  }}
                />
              } 
            />
            <Route 
              path="/services/:slug" 
              element={<MethodologyPage onOpenContact={handleOpenContact} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenContact={handleOpenContact} />} 
            />
            <Route 
              path="/case-studies" 
              element={
                <CaseStudiesPage 
                  onOpenContact={handleOpenContact} 
                  onSelectStory={(story) => setSelectedStory(story)} 
                />
              } 
            />
            <Route 
              path="/case-studies/:id" 
              element={<CaseStudyDetailPage onOpenContact={handleOpenContact} />} 
            />
            <Route 
              path="/whitepapers" 
              element={
                <WhitepapersPage 
                  onOpenContact={handleOpenContact}
                  onSelectArticle={(article) => {
                    setSelectedStory({
                      id: article.id,
                      brand: article.category,
                      title: article.title,
                      type: 'image',
                      mediaSrc: article.bgImage,
                      category: article.category,
                      results: 'Proprietary Research Dataset & Forecast',
                      fullSummary: `${article.title}. ${article.excerpt} Vincent Research conducts continuous quantitative pulse surveys across our 40M+ global panel network to deliver statistical certainty to enterprise strategy boards.`
                    });
                  }}
                />
              } 
            />
            <Route 
              path="/feasibility" 
              element={<FeasibilityPage onOpenContact={handleOpenContact} />} 
            />
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <HomePage
                  onOpenContact={handleOpenContact}
                  onOpenAbout={() => setIsAboutOpen(true)}
                  onSelectStory={(story) => setSelectedStory(story)}
                  onSelectArticle={() => {}}
                />
              } 
            />
          </Routes>
        </main>

        {/* 3. GLOBAL FOOTER */}
        <Footer
          onOpenContact={() => handleOpenContact('')}
          onOpenAbout={() => setIsAboutOpen(true)}
          onReplayIntro={() => setShowIntro(true)}
        />

        {/* 4. CASE STUDY / WHITEPAPER DETAIL MODAL */}
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          onOpenContact={() => {
            setSelectedStory(null);
            handleOpenContact('');
          }}
        />

        {/* 5. FULL RESEARCH RFP & BRIEFING MODAL */}
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialMethodology={initialMethodology}
        />

        {/* 6. ABOUT VINCENT RESEARCH MODAL OVERLAY */}
        <AboutModal
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
          onOpenContact={() => {
            setIsAboutOpen(false);
            handleOpenContact('');
          }}
        />

      </div>
    </HashRouter>
  );
}
