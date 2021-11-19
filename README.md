# Impala local playground

A simple project to play around with the impala API

### Requirements:

All you need to run the sample app is [Docker](https://www.docker.com/get-started) installed on your system.

### Steps:

Clone this repository and cd into it.

Run `cp .example.env .env` and update the `API_KEY` value inside that  `.env` file with your own key.

Run `docker-compose up`, which will spin up a node environment on your computer.

Visit `localhost:8000` in your browser to see the index page.

### Configuration and changes:

`index.js` - This is where our simple server lives. Impala's API can not be called directly from a client, so we need to call it from a server.

You can see an example of calling the API in the `/hotels` endpoint:

```
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
```

If you would like to try different endpoints, simply create another route in express.

`index.html` - If you want to hit the API in your browser, you can edit the script tag in the index.html file and change / add calls to our server, which runs
on localhost. 
