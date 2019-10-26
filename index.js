require('./server/api/models/lot');

const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const lotsRouter = require('./server/api/routes/views/lots');
const lotsApiRouter = require('./server/api/routes/api/lots');
const tablesRouter = require('./server/api/routes/views/accountingTables');
const tablesApiRouter = require('./server/api/routes/api/accountingTables');
const cropsRouter = require('./server/api/routes/views/crops');
const cropsApiRouter = require('./server/api/routes/api/crops');
const diseasesRouter = require('./server/api/routes/views/diseases');
const diseasesApiRouter = require('./server/api/routes/api/diseases');
const usersRouter = require('./server/api/routes/views/users');
const usersApiRouter = require('./server/api/routes/api/users');
const { MONGO_URI } = require('./server/api/config/constants/database');

// app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/lots", lotsRouter);
app.use("/api/lots", lotsApiRouter);
app.use("accountingTables", tablesRouter);
app.use("/api/accountingTables", tablesApiRouter);
app.use("crops", cropsRouter);
app.use("/api/crops", cropsApiRouter);
app.use("diseases", diseasesRouter);
app.use("/api/diseases", diseasesApiRouter);
app.use("users", usersRouter);
app.use("/api/users", usersApiRouter);

// redirect
app.use("/", function(req, res){
    res.redirect('/plants');
});

// server
const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});