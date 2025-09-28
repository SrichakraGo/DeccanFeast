// server.js
const express = require('express');
const cors = require('cors');       // <-- install: npm install cors
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// IMPORTANT: Put this before your routes
app.use(cors({
  origin: 'http://localhost:5173',  // allow only your dev origin (safer)
  credentials: true,                // set true only if you need cookies/auth
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

// Optional: ensure preflight handled for all routes
app.options('*', cors());

const reviewsFile = path.join(__dirname, 'reviews.json');

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

app.listen(PORT, () => {
  console.log(`Reviews server running on port ${PORT}`);
});
