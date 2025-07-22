require('dotenv').config();
const express = require('express');
const app = express();          
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
});

app.get('/twitter' , (req, res) => {
    res.send('Welcome to the Twitter page!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>');
});

