import React from 'react';
import ScrollExpandHero from '../components/material/ScrollExpandHero';
import InteractiveOutcomes from '../components/material/InteractiveOutcomes';
import ClientMarquee from '../components/material/ClientMarquee';
import FeasibilityCalculator from '../components/material/FeasibilityCalculator';
import ClientStories from '../components/material/ClientStories';
import ServicesTable from '../components/material/ServicesTable';
import TheLatest from '../components/material/TheLatest';
import CampaignCTA from '../components/material/CampaignCTA';

export default function HomePage({ onOpenContact, onOpenAbout, onSelectStory, onSelectArticle }) {
  return (
    <>
      {/* 1. SCROLL-EXPAND HERO WITH AMBIENT 4K VIDEO & STATS */}
      <ScrollExpandHero
        onOpenContact={() => onOpenContact('')}
        onOpenAbout={onOpenAbout}
      />

      {/* 2. INTERACTIVE OUTCOMES ("WHAT WE DO" - 5 MR DELIVERABLES & SYNCED VIDEOS) */}
      <InteractiveOutcomes />

      {/* 3. DUAL-DIRECTION INFINITE LOGO MARQUEE SLIDERS */}
      <ClientMarquee />

      {/* 4. INTERACTIVE FEASIBILITY & INCIDENCE RATE (IR) ENGINE */}
      <FeasibilityCalculator
        onOpenContact={() => onOpenContact('Online CAWI Panel Surveys (Global Reach)')}
      />

      {/* 5. MARKET RESEARCH CLIENT STORIES (6 CASE STUDIES WITH MODAL INSPECTOR) */}
      <ClientStories
        onSelectStory={onSelectStory}
      />

      {/* 6. TWO-COLUMN SERVICES DIRECTORY (QUANTITATIVE, QUALITATIVE, SPECIALTY PANELS) */}
      <ServicesTable
        onOpenContact={(methodology) => onOpenContact(methodology)}
      />

      {/* 7. THE LATEST / PEER-REVIEWED WHITEPAPERS & BENCHMARKS */}
      <TheLatest
        onSelectArticle={onSelectArticle}
      />

      {/* 8. CAMPAIGN CTA ("READY TO COMMISSION YOUR NEXT STUDY? REQUEST AN RFP") */}
      <CampaignCTA
        onOpenContact={() => onOpenContact('')}
      />
    </>
  );
}
