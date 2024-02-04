let express = require("express");
let app = express();

let cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:date?", function (req, res) {
  let inputDate = req.params.date;

  if (!inputDate) {
    let currentDate = new Date();
    res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
    return;
  }
  
  if (!isNaN(inputDate) && isFinite(inputDate)) {
    let unixTimestamp = parseInt(inputDate);
    let date = new Date(unixTimestamp);
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
    return;
  }

  let parsedDate = new Date(inputDate);

  if (isNaN(parsedDate.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: parsedDate.getTime(), utc: parsedDate.toUTCString() });
  }
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listen for requests:
let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
