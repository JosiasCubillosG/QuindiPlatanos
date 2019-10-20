const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const plantsRouter = require('./routes/views/plants');
const plantsApiRouter = require('./routes/api/plants.js');

// app
const app = express();

// middlewares
app.use(bodyParser.json());

// static files
app.use("/static",express.static(path.join(__dirname,"src/public")));

// view engine setup
app.set("views",path.join(__dirname,"src/app"));
app.set("view engine","pug");


// routes
app.use("/plants", plantsRouter);
app.use("/api/plants", plantsApiRouter);

// redirect
app.use("/", function(req, res){
    res.redirect('/plants');
});

// server
const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});