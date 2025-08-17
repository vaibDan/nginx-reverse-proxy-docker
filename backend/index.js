const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
