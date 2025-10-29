const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend instance', instance: process.env.INSTANCE_ID || 'unknown' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
