var axios = require('axios');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())
var port = 8080;

app.use(express.static(__dirname + '/../react-client/dist'));
app.get('/', function(req, res) {
    if (err){
        console.log(err)
    } else {
        res.send('server is working and on')
    }
})
// server is going to have to get information on available dates

// minimum nights needed to be rented????....may not need

// place id

// location 

// price?...may be a part of booking but

// if date is passed black out the old date


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})