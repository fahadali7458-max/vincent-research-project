import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data storage directory exists
const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Initialize storage files if not present
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2));
}
if (!fs.existsSync(SUBSCRIBERS_FILE)) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
}

// -------------------------------------------------------------
// 1. LIVE PANEL TELEMETRY & STATS ENDPOINT
// -------------------------------------------------------------
app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      activePanelists: 40291480,
      activeCountries: 124,
      veritrustAccuracyScore: 99.84,
      completedStudiesThisMonth: 1420,
      globalHubs: ['Lucknow (HQ)', 'London', 'Singapore', 'New York', 'Sydney'],
      founder: 'Fahad Ali',
      fieldworkCapacity: 'CATI, CAWI, In-Person FGDs, Mobile Ethnography'
    }
  });
});

// -------------------------------------------------------------
// 2. SAMPLE FEASIBILITY CALCULATOR ENDPOINT
// -------------------------------------------------------------
app.post('/api/feasibility', (req, res) => {
  const { country = 'Global', targetAudience = 'General Population', sampleSize = 1000, methodology = 'CAWI' } = req.body;

  const numericSample = parseInt(sampleSize, 10) || 1000;
  
  // Dynamic feasibility logic based on target demographic
  let incidenceRate = '85%';
  let estimatedDays = 3;
  let veritrustTier = 'Tier 1 Automated Fingerprint Verification';

  if (targetAudience.includes('B2B') || targetAudience.includes('Executive')) {
    incidenceRate = '18%';
    estimatedDays = Math.ceil((numericSample / 250) + 4);
    veritrustTier = 'Tier 3 Double-Blind LinkedIn & Corporate Domain Verification';
  } else if (targetAudience.includes('Healthcare') || targetAudience.includes('HCP')) {
    incidenceRate = '9%';
    estimatedDays = Math.ceil((numericSample / 100) + 5);
    veritrustTier = 'Tier 3 Medical License & NPI / GMC Registry Check';
  } else {
    estimatedDays = Math.max(2, Math.ceil(numericSample / 500));
  }

  const responseData = {
    country,
    targetAudience,
    sampleSize: numericSample,
    methodology,
    feasibilityStatus: 'HIGHLY FEASIBLE (100% In-House Panel Reach)',
    incidenceRate,
    estimatedTurnaroundDays: estimatedDays,
    veritrustTier,
    estimatedPanelPoolSize: country === 'Global' ? '40,000,000+' : '1,200,000+',
    quoteReferenceId: `VR-FEAS-${Date.now().toString(36).toUpperCase()}`
  };

  res.json({
    success: true,
    data: responseData
  });
});

// -------------------------------------------------------------
// 3. SUBMIT RESEARCH RFP / BRIEF INQUIRY
// -------------------------------------------------------------
app.post('/api/rfp', (req, res) => {
  try {
    const { fullName, email, organization, service, methodology, sampleSize, geography, scope } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, error: 'Full name and email are required.' });
    }

    const newInquiry = {
      id: `RFP-${Date.now()}`,
      timestamp: new Date().toISOString(),
      fullName,
      email,
      organization: organization || 'Confidential Enterprise',
      service: service || 'Quantitative Market Research',
      methodology: methodology || 'CAWI Online Survey',
      sampleSize: sampleSize || '1000',
      geography: geography || 'Global Multi-Market',
      scope: scope || '',
      status: 'UNDER_REVIEW_BY_FAHAD_ALI',
      assignedExecutive: 'Fahad Ali (Founder & Managing Director)'
    };

    const inquiries = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'));
    inquiries.push(newInquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2));

    console.log(`[RFP RECEIVED] From ${fullName} (${organization}) - ID: ${newInquiry.id}`);

    res.json({
      success: true,
      message: 'RFP Brief registered successfully. Our senior intelligence directorate will connect within 24 hours.',
      inquiryId: newInquiry.id,
      directSupportLine: '+91 7458098299'
    });
  } catch (error) {
    console.error('Error saving RFP:', error);
    res.status(500).json({ success: false, error: 'Internal server error while logging RFP' });
  }
});

// -------------------------------------------------------------
// 4. NEWSLETTER SUBSCRIPTION ENDPOINT
// -------------------------------------------------------------
app.post('/api/newsletter', (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'Valid corporate email required.' });
    }

    const subscribers = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8'));
    const exists = subscribers.some(s => s.email.toLowerCase() === email.toLowerCase());

    if (!exists) {
      subscribers.push({
        email: email.toLowerCase(),
        timestamp: new Date().toISOString(),
        tier: 'Global Market Intelligence Executive'
      });
      fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
    }

    console.log(`[NEWSLETTER SUBSCRIBED] ${email}`);
    res.json({ success: true, message: 'Subscribed to Vincent Research Executive Briefs.' });
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// -------------------------------------------------------------
// 5. GET ALL INQUIRIES (ADMIN MONITORING)
// -------------------------------------------------------------
app.get('/api/inquiries', (req, res) => {
  try {
    const inquiries = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'));
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not read inquiries' });
  }
});

// -------------------------------------------------------------
// 6. SERVE PRODUCTION STATIC ASSETS (SINGLE-CONTAINER DEPLOYMENT)
// -------------------------------------------------------------
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
  console.log(`[PRODUCTION] Serving frontend static assets from ${distPath}`);
}

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  VINCENT RESEARCH MARKET INTELLIGENCE BACKEND API`);
  console.log(`  Status: Active on http://localhost:${PORT}`);
  console.log(`  Endpoints: /api/stats, /api/feasibility, /api/rfp, /api/newsletter`);
  console.log(`======================================================\n`);
});
