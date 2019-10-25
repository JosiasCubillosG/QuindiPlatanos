const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const plantsRouter = require('./server/api/routes/views/plants');
const plantsApiRouter = require('./server/api/routes/api/plants');
const { MONGO_URI } = require('./server/api/config/constants/database')

// app
const app = express();

// middlewares
app.use(bodyParser.json());

// database setting
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// static files
app.use("/static",express.static(path.join(__dirname,"public")));

// view engine setup
app.set("views",path.join(__dirname,"views"));
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