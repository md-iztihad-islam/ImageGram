import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    return res.send('Home');
});

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

app.get('/hello', (req, res) => {
    return res.json({ message: 'Hello World!' });
});

app.post('/hello', (req, res) => {
    return res.json({ message: 'POST: Hello World!' });
});

app.delete('/hello', (req, res) => {
    return res.json({ message: 'DELETE: Hello World!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});