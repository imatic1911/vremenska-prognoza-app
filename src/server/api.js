// Ovo je API za ucitavanje i mnupalcija gradova untar file server/gradovi.json
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const JSON_FILE_PATH = path.join(__dirname, './gradovi.json');

app.use(express.json());

app.get('/api/gradovi', (req, res) => {
  fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const gradovi = JSON.parse(data);
    res.json(gradovi);
  });
});

app.post('/api/gradovi', (req, res) => {
  const { grad } = req.body;
  if (!grad) {
    res.status(400).json({ error: 'Grad not provided' });
    return;
  }

  fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const gradovi = JSON.parse(data);
    gradovi.push(grad);

    fs.writeFile(JSON_FILE_PATH, JSON.stringify(gradovi), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json({ success: true });
    });
  });
});

app.delete('/api/gradovi/:grad', (req, res) => {
  const { grad } = req.params;

  fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const gradovi = JSON.parse(data);
    const updatedGradovi = gradovi.filter(g => g !== grad);

    fs.writeFile(JSON_FILE_PATH, JSON.stringify(updatedGradovi), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json({ success: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});