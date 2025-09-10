const express = require('express');
const postRouter = require('./route/route');
const contactRouter = require('./route/contact');

// const dotenv = require('dotenv');
// dotenv.config();
// Short form of the above commented code
require('dotenv/config');

const app = express();
const client = require('mongodb').MongoClient;

const port = process.env.PORT;
const url = process.env.MONGO_URL;

app.get('/', (req, res) => {
    res.send('We are home');
});

app.use('/post', postRouter);
app.use('/contact', contactRouter);

client.connect(url)
.then(() => {
    console.log('Connected successfully!');
})
.catch((error) => {
    console.error('Mongodb Connection error:', error.message || error);
})
app.listen(port, () => `Live on Port:${port}`);