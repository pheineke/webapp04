const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Statisches Verzeichnis für die öffentlichen Dateien (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});

app.get('/main.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, 'public', 'js', 'main.js'));
});
app.get('/world_generator.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, 'public', 'js', 'world_generator.js'));
});