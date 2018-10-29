var axios = require('axios');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())
<<<<<<< HEAD
var port = 8080;

app.use(express.static(__dirname + '/../react-client/dist'));
app.get('/', function(req, res) {
    if (err){
        console.log(err)
    } else {
        res.send('server is working and on')
    }
})
=======

>>>>>>> 6328d59d5755db711e5804c5558a208b983ea503
// server is going to have to get information on available dates

// minimum nights needed to be rented????....may not need

// place id

// location 

// price?...may be a part of booking but

// if date is passed black out the old date
<<<<<<< HEAD


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
=======
>>>>>>> 6328d59d5755db711e5804c5558a208b983ea503
