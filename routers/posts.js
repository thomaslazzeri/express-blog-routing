import express from 'express';
import { posts } from '../reference/posts.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.send("Lista dei post");
});

postsRouter.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${req.params.id}`);
});

postsRouter.post('/', (req, res) => {
    res.send("Creazione del post");
});

postsRouter.put('/:id', (req, res) => {
    res.send(`Modifica del post ${req.params.id}`);
});

postsRouter.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
});