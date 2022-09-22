const express = require("express");
const request = require('request');

const app = express();

app.get("/", (req, res) => {
    request({
        uri: 'https://api.bookeo.com/v2/availability/slots?apiKey=AU63AAEP4RCTEHAXM9HXJ41558697WMR1777F47D4D4&secretKey=IPEwY87K3Eoskq4c2EiDQ0jP4RwM2P5A&startTime=2022-09-23T09:00:00-03:00&endTime=2022-09-24T03:00:00-03:00&itemsPerPage=300',

    }).pipe(res);
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (req, res) => {
    const d = new Date()
    res.end(d.toString())
}

module.exports = allowCors(handler)

// Export the Express API
module.exports = app;
