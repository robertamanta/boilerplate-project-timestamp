var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
var cors = require('cors');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/:date?", function (req, res) {
  let dateParam = req.params.date;
  let date;
  let unixDate;
  let utcDate;

  //if date parameter is not empty
  if (dateParam) {
    //if is number convert to int and pass to Date() constructor
    if (!isNaN(dateParam)) {
      date = new Date(parseInt(dateParam));
    } else {
      date = new Date(dateParam);
    }

  } else {
    date = new Date();

  }
  if (date.toString() === "Invalid Date") {
    res.json({
      error: date.toString()
    });
  } else {
    unixDate = date.getTime();
    utcDate = date.toUTCString();
    res.json({
      unix: unixDate,
      utc: utcDate
    });
  }

});



// listen for requests :)s
const listener = app.listen(process.env.PORT || "3000", function () {
  console.log('Your app is listening on port ' + listener.address().port);
});