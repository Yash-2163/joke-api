// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why do JavaScript developers wear glasses? Because they don’t C#.",
  "I told my computer I needed a break, and it said 'No problem — I’ll go to sleep!'",
  "What do you call 8 hobbits? A hobbyte.",
  "Why was the developer unhappy at their job? They wanted arrays!"
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/joke', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
