// Init project
let express = require("express");
let app = express();

// We need to enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// then the API is remotely testable by FCC
let cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

/* A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number) */

/* A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT */

/* A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } */

// Endpoint to handle date requests
app.get("/api/:date?", function (req, res) {
  /* It extracts the date parameter from the URL. For example, in the case of /api/1451001600000, inputDate will be the string "1451001600000"*/
  let inputDate = req.params.date;

  // If the date parameter is empty, use the current time
  if (!inputDate) {
    let currentDate = new Date();
    res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
    return;
  }

  // Check if the input is a valid Unix timestamp
  if (!isNaN(inputDate) && isFinite(inputDate)) {
    let unixTimestamp = parseInt(inputDate);
    let date = new Date(unixTimestamp);
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
    return;
  }

  /* Your project can handle dates that can be successfully parsed by new Date(date_string) */

  // Try parsing the input date as a string
  let parsedDate = new Date(inputDate);

  /* If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" } */

  /* An empty date parameter should return the current time in a JSON object with a unix key */

  /* An empty date parameter should return the current time in a JSON object with a utc key */

  // Check if the parsed date is valid:
  if (isNaN(parsedDate.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: parsedDate.getTime(), utc: parsedDate.toUTCString() });
  }
});

// The first API endpoint:
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listen for requests:
let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

