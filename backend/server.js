const express = require('express');
const cors = require('cors');
const app = express();

// Настройка CORS для GitHub Pages
app.use(cors({
  origin: ['https://aliviafanix.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Ваши роуты
app.get('/api/data', (req, res) => {
  res.json({ message: 'Данные с локального сервера' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 