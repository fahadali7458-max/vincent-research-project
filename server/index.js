import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from Vite build output directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// API Routes placeholder (Aapke baaki API endpoints yahan aayenge)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VINCENT RESEARCH API Active' });
});

// Safe Express v5 Catch-All Middleware for SPA Client-Side Routing
// Path string bypass karta hai taaki path-to-regexp parser crash na ho
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// Server listener
app.listen(PORT, () => {
  console.log('----------------------------------------------------');
  console.log('VINCENT RESEARCH MARKET INTELLIGENCE BACKEND API');
  console.log(`Status: Active on http://localhost:${PORT}`);
  console.log('----------------------------------------------------');
});
