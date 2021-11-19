import express from 'express';
import fetch from 'node-fetch';
const app = express();
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src' });
});

app.get('/hotels', (req, res) => {

    fetch("https://sandbox.impala.travel/v1/hotels", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY
        }
    })
        .then(response => {
            response.json()
                .then(data => res.json(data))
        })
        .catch(err => {
            console.error(err);
        });
});

app.listen(8000);