import express from 'express';

const app = express();
const port = 3000;

app.get('/posts', (req, res) => {
    res.send("Lista dei post");
});

app.delete('/posts/1', (req, res) => {
    res.send("Cancellazione del post");
});