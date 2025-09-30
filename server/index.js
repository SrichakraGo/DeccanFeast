// index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// --- CORS Setup ---
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: FRONTEND_ORIGIN,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight
app.options('*', cors());

// JSON parser
app.use(express.json());

// Path to reviews file
const reviewsFile = path.join(__dirname, 'reviews.json');

// --- API Routes ---
app.get('/reviews', (req, res) => {
  fs.readFile(reviewsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read reviews.' });
    res.json(JSON.parse(data));
  });
});

app.get('/reviews/:placeId', (req, res) => {
  const placeId = req.params.placeId;
  fs.readFile(reviewsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read reviews.' });
    const reviews = JSON.parse(data).filter(r => r.placeId === placeId);
    res.json(reviews);
  });
});

app.post('/reviews', (req, res) => {
  const newReview = req.body;
  fs.readFile(reviewsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read reviews.' });
    const reviews = JSON.parse(data);
    newReview.id = String(Date.now());
    reviews.push(newReview);
    fs.writeFile(reviewsFile, JSON.stringify(reviews, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to save review.' });
      res.status(201).json(newReview);
    });
  });
});

// --- Serve frontend build (production only) ---
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// --- Start server ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Reviews server running on port ${PORT}`);
});
