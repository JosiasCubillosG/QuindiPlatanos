require('./server/api/models/lot');
require('./server/api/models/accountingTable');
require('./server/api/models/crop');
require('./server/api/models/disease');
require('./server/api/models/expense');
require('./server/api/models/income');
require('./server/api/models/lot');
require('./server/api/models/user');

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
const incomesRouter = require('./server/api/routes/views/incomes');
const incomesApiRouter = require('./server/api/routes/api/incomes');
const expensesRouter = require('./server/api/routes/views/expenses');
const expensesApiRouter = require('./server/api/routes/api/expenses');
 

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
app.use("/static",express.static(path.join(__dirname,"client/dist")));

// routes
app.use("/api/lots", lotsApiRouter);
app.use("/api/accountingTables", tablesApiRouter);
app.use("/api/crops", cropsApiRouter);
app.use("/api/diseases", diseasesApiRouter);
app.use("/api/users", usersApiRouter);
app.use("/api/incomes", incomesApiRouter);
app.use("/api/expenses", expensesApiRouter);

// redirect
app.use("*", function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// server
const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});