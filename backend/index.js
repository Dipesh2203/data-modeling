import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req, res) => {
  res.send('server is running');
});

// get a list of 5 jokes from the joke API

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
        { id: 2, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
        { id: 3, setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
        { id: 4, setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
        { id: 5, setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" }
    ];
    res.json(jokes);});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });