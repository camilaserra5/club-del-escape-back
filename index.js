

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/slots', (req, res) => {
    let dateFrom = req.query.dateFrom; //2022-09-23
    let dateTo = req.query.dateTo; //2022-09-24
    let urlll = 'https://api.bookeo.com/v2/availability/slots?apiKey=AU63AAEP4RCTEHAXM9HXJ41558697WMR1777F47D4D4&secretKey=IPEwY87K3Eoskq4c2EiDQ0jP4RwM2P5A&startTime=' + dateFrom + 'T09:00:00-03:00&endTime=' + dateTo + 'T03:00:00-03:00&itemsPerPage=300'

    console.log(urlll)
    request(
        { url: urlll},
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error });
            }

            res.json(JSON.parse(body));
        }
    )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));