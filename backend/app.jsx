const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Add this line
const app = express();

app.use(cors());

// Define a function to load translations
function loadTranslations(lang) {
  try {
    const data = fs.readFileSync(`./translations/${lang}.json`, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return {};
  }
}

app.get('/api/translations/:lang', (req, res) => {
  const lang = req.params.lang;
  const translations = loadTranslations(lang);
  if (Object.keys(translations).length > 0) {
    res.json(translations);
  } else {
    res.status(404).json({ error: 'Translation not found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
