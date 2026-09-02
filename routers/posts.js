import express from 'express';

export const postsRouter = express.Router();

app.get('/posts', (req, res) => {
    res.send("Lista dei post");
});

app.delete('/posts/1', (req, res) => {
    res.send("Cancellazione del post");
});