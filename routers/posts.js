import express from 'express';
import { posts } from '../reference/posts.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.json(posts);
});

postsRouter.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ message: "Post non trovato " });
    }

    res.json(post);
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