import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Mail, Globe, Menu, X, ArrowRight, ChevronDown, Check, Calculator } from 'lucide-react';

const METHODOLOGY_SLUGS = {
  'Online Panel Surveys (CAWI)': 'online-panel-surveys',
  'CATI Telephone Intercepts': 'cati-telephone-intercepts',
  'Conjoint & MaxDiff Pricing Modeling': 'conjoint-maxdiff-modeling',
  'Longitudinal Brand Health Tracking': 'longitudinal-brand-tracking',
  'Concept & Packaging Feasibility': 'concept-packaging-feasibility',
  'Focus Group Discussions (FGDs)': 'focus-group-discussions',
  'In-Depth Interviews (IDIs)': 'in-depth-interviews',
  'In-Home Usage Testing (IHUT)': 'in-home-usage-testing',
  'Digital Ethnography & Video Diaries': 'digital-ethnography-video-diaries',
  'Sensory & Taste Evaluation Labs': 'sensory-taste-labs',
  'B2B & C-Suite Executive Panels': 'b2b-executive-panels',
  'Healthcare Professionals (HCPs & KOLs)': 'healthcare-hcp-panels',
  'VeriTrust™ Anti-Fraud Shield': 'veritrust-anti-fraud',
  'SPSS, R & Advanced Tabulation': 'spss-r-advanced-tabulation',
  'Boardroom Executive Dashboards': 'boardroom-executive-dashboards',
};

export default function Header({ onOpenContact, onOpenAbout }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Global Region');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isDarkNav = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const searchableItems = [
    { title: 'Online Panel Surveys (CAWI)', category: 'Quantitative Research', link: '/services/online-panel-surveys' },
    { title: 'Computer-Assisted Telephone Interviews (CATI)', category: 'Quantitative Research', link: '/services/cati-telephone-intercepts' },
    { title: 'Choice-Based Conjoint (CBC) & MaxDiff Modeling', category: 'Quantitative Research', link: '/services/conjoint-maxdiff-modeling' },
    { title: 'Continuous Brand Health & Tracking Studies', category: 'Quantitative Research', link: '/services/longitudinal-brand-tracking' },
    { title: 'Concept & Packaging Feasibility', category: 'Quantitative Research', link: '/services/concept-packaging-feasibility' },
    { title: 'Focus Group Discussions (FGDs)', category: 'Qualitative Research', link: '/services/focus-group-discussions' },
    { title: 'In-Depth Interviews (IDIs)', category: 'Qualitative Research', link: '/services/in-depth-interviews' },
    { title: 'In-Home Usage Testing (IHUT)', category: 'Qualitative Research', link: '/services/in-home-usage-testing' },
    { title: 'Digital Ethnography & Video Diaries', category: 'Qualitative Research', link: '/services/digital-ethnography-video-diaries' },
    { title: 'Sensory & Taste Evaluation Labs', category: 'Qualitative Research', link: '/services/sensory-taste-labs' },
    { title: 'B2B & C-Suite Executive Respondent Panel', category: 'Specialty Sampling', link: '/services/b2b-executive-panels' },
    { title: 'Healthcare & Medical Decision-Maker Panel (HCPs)', category: 'Specialty Sampling', link: '/services/healthcare-hcp-panels' },
    { title: 'VeriTrust™ Bot & Fraud Elimination Shield', category: 'Data Integrity', link: '/services/veritrust-anti-fraud' },
    { title: 'SPSS, R & Advanced Tabulation', category: 'Data Analytics', link: '/services/spss-r-advanced-tabulation' },
    { title: 'Boardroom Executive Dashboards', category: 'Analytics BI', link: '/services/boardroom-executive-dashboards' },
    { title: 'Instant Sample Feasibility & IR Calculator', category: 'Tools', link: '/feasibility' },
    { title: 'Enterprise Research Case Studies', category: 'Client Stories', link: '/case-studies' },
    { title: 'Whitepapers & Empirical Research Library', category: 'Publications', link: '/whitepapers' },
    { title: 'Fahad Ali - Founder & Managing Director', category: 'Leadership', link: '/about' },
  ];

  const filteredItems = searchQuery.trim() === '' 
    ? [] 
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchResultClick = (link) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(link);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isDarkNav 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 text-white' 
        : isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 text-neutral-900' 
          : 'bg-white border-b border-neutral-100 text-neutral-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND LOGO */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex flex-col justify-center group py-0.5 select-none">
              {/* BRAND TITLE: VINCENT RESEARCH® */}
              <div className="flex items-baseline gap-2">
                <span className={`font-display font-black text-2xl sm:text-[26px] tracking-tight leading-none transition-colors ${
                  isDarkNav ? 'text-white group-hover:text-neutral-200' : 'text-neutral-900 group-hover:text-black'
                }`}>
                  VINCENT
                </span>
                <span className="font-display font-black text-2xl sm:text-[26px] tracking-tight leading-none text-[#00B4D8] flex items-center">
                  RESEARCH<sup className="text-xs sm:text-sm font-extrabold ml-0.5 text-[#00B4D8]">®</sup>
                </span>
              </div>
              
              {/* MOTTO & SUBTEXT */}
              <div className="flex flex-col mt-1 space-y-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[#00B4D8] leading-tight font-sans">
                  SUCCESS THROUGH RESEARCH
                </span>
                <span className={`text-[8.5px] sm:text-[9.5px] font-mono tracking-widest uppercase leading-tight ${
                  isDarkNav ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  GLOBAL MARKET RESEARCH &bull; 40M+ PANEL
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center space-x-8">
            
            {/* SERVICES WITH MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 py-6 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  isDarkNav ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'
                }`}
              >
                <span>RESEARCH METHODOLOGIES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-emerald-400' : 'text-neutral-400'}`} />
              </button>

              {/* MEGA MENU DROPDOWN */}
              {isServicesOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-white border border-neutral-200 rounded-2xl shadow-2xl p-8 grid grid-cols-3 gap-8 animate-fadeIn transition-all z-50"
                  style={{ animationDuration: '200ms' }}
                >
                  {/* Column 1: Quantitative */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 pb-2 border-b border-neutral-200 flex items-center justify-between">
                      <span>QUANTITATIVE RESEARCH</span>
                      <span className="text-[10px] font-mono text-emerald-600">CAWI / CATI</span>
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-700">
                      {[
                        'Online Panel Surveys (CAWI)',
                        'CATI Telephone Intercepts',
                        'Conjoint & MaxDiff Pricing Modeling',
                        'Longitudinal Brand Health Tracking',
                        'Concept & Packaging Feasibility'
                      ].map((item, i) => (
                        <li key={i}>
                          <Link 
                            to={`/services/${METHODOLOGY_SLUGS[item] || 'online-panel-surveys'}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="hover:text-black hover:translate-x-1 transition-all flex items-center gap-2 group text-left w-full py-0.5"
                          >
                            <span className="text-neutral-400 group-hover:text-emerald-600 text-xs font-bold">+</span>
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Qualitative */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 pb-2 border-b border-neutral-200 flex items-center justify-between">
                      <span>QUALITATIVE FIELDWORK</span>
                      <span className="text-[10px] font-mono text-emerald-600">IMMERSION</span>
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-700">
                      {[
                        'Focus Group Discussions (FGDs)',
                        'In-Depth Interviews (IDIs)',
                        'In-Home Usage Testing (IHUT)',
                        'Digital Ethnography & Video Diaries',
                        'Sensory & Taste Evaluation Labs'
                      ].map((item, i) => (
                        <li key={i}>
                          <Link 
                            to={`/services/${METHODOLOGY_SLUGS[item] || 'focus-group-discussions'}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="hover:text-black hover:translate-x-1 transition-all flex items-center gap-2 group text-left w-full py-0.5"
                          >
                            <span className="text-neutral-400 group-hover:text-emerald-600 text-xs font-bold">+</span>
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Panels & Data Quality */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 pb-2 border-b border-neutral-200 flex items-center justify-between">
                      <span>PANELS &amp; VERITRUST™</span>
                      <span className="text-[10px] font-mono text-emerald-600">40M+ REACH</span>
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-700">
                      {[
                        'B2B & C-Suite Executive Panels',
                        'Healthcare Professionals (HCPs & KOLs)',
                        'VeriTrust™ Anti-Fraud Shield',
                        'SPSS, R & Advanced Tabulation',
                        'Boardroom Executive Dashboards'
                      ].map((item, i) => (
                        <li key={i}>
                          <Link 
                            to={`/services/${METHODOLOGY_SLUGS[item] || 'b2b-executive-panels'}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="hover:text-black hover:translate-x-1 transition-all flex items-center gap-2 group text-left w-full py-0.5"
                          >
                            <span className="text-neutral-400 group-hover:text-emerald-600 text-xs font-bold">+</span>
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <Link 
              to="/feasibility"
              className={`text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 ${
                isDarkNav ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>FEASIBILITY CALCULATOR</span>
            </Link>

            <Link 
              to="/case-studies"
              className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                isDarkNav ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'
              }`}
            >
              RESEARCH CASE STUDIES
            </Link>

            <Link 
              to="/whitepapers"
              className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                isDarkNav ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'
              }`}
            >
              WHITEPAPERS
            </Link>

            <Link 
              to="/about"
              className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                isDarkNav ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'
              }`}
            >
              ABOUT AGENCY
            </Link>
          </nav>

          {/* RIGHT UTILITIES */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            
            {/* REGION SELECTOR */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className={`flex items-center gap-1.5 text-xs py-2 transition-colors ${
                  isDarkNav ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Globe className={`w-3.5 h-3.5 ${isDarkNav ? 'text-neutral-400' : 'text-neutral-500'}`} />
                <span>{selectedRegion}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {isRegionOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg py-2 z-50 animate-fadeIn text-neutral-900">
                  <div className="px-3 py-1 text-[10px] font-mono uppercase text-neutral-400 border-b border-neutral-100">
                    Fieldwork Operations
                  </div>
                  {['Global Region', 'India & South Asia', 'North America (US/CA)', 'EMEA & UK', 'APAC & ASEAN'].map((region) => (
                    <button
                      key={region}
                      onClick={() => {
                        setSelectedRegion(region);
                        setIsRegionOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-3 py-2 text-xs text-left text-neutral-700 hover:bg-neutral-50 hover:text-black"
                    >
                      <span>{region}</span>
                      {selectedRegion === region && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CONTACT / RFP BUTTON */}
            <button 
              onClick={() => onOpenContact('')}
              className={`p-2 rounded-full transition-colors ${
                isDarkNav ? 'text-neutral-300 hover:text-white hover:bg-white/10' : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
              }`}
              title="Submit Research RFP"
            >
              <Mail className="w-4 h-4" />
            </button>

            {/* SEARCH ICON */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${
                isDarkNav ? 'text-neutral-300 hover:text-white hover:bg-white/10' : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
              }`}
              title="Search Methodologies & Research"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <div className="xl:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isDarkNav ? 'text-white hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-6 shadow-xl animate-fadeIn">
          <div className="space-y-4">
            <Link 
              to="/services/online-panel-surveys"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-left text-sm font-bold uppercase tracking-wider text-neutral-900 w-full py-2"
            >
              RESEARCH METHODOLOGIES (EXPLORE ALL 15)
            </Link>
            <Link 
              to="/feasibility"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-left text-sm font-bold uppercase tracking-wider text-emerald-600 w-full py-2"
            >
              FEASIBILITY CALCULATOR
            </Link>
            <Link 
              to="/case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-left text-sm font-bold uppercase tracking-wider text-neutral-900 w-full py-2"
            >
              CASE STUDIES
            </Link>
            <Link 
              to="/whitepapers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-left text-sm font-bold uppercase tracking-wider text-neutral-900 w-full py-2"
            >
              WHITEPAPERS &amp; INSIGHTS
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-left text-sm font-bold uppercase tracking-wider text-neutral-900 w-full py-2"
            >
              ABOUT VINCENT RESEARCH
            </Link>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <div className="text-xs text-neutral-500">
              Region: <span className="font-semibold text-neutral-900">{selectedRegion}</span>
            </div>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact('');
              }}
              className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Request RFP
            </button>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
            
            <div className="flex items-center px-6 py-4 border-b border-neutral-200">
              <Search className="w-5 h-5 text-neutral-400 mr-3" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search methodologies, case studies, whitepapers, or panels..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-base bg-transparent border-none focus:outline-none text-neutral-900 placeholder-neutral-400"
              />
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-neutral-400 hover:text-black p-1 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="text-xs font-mono text-neutral-400 p-4 text-center">
                  Type e.g. "CAWI", "Conjoint", "CATI", "Focus Groups", "HCP", or "VeriTrust" to inspect dedicated research pages.
                </div>
              ) : filteredItems.length > 0 ? (
                <div className="space-y-1">
                  {filteredItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(item.link)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 text-left transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-neutral-800 group-hover:text-black">
                          {item.title}
                        </div>
                        <div className="text-xs font-mono text-neutral-400">
                          {item.category}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-sm text-neutral-500">
                  No matching research methodology found for "{searchQuery}".
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
