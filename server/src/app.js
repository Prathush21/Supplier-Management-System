const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const { supplierRouter } = require("./router/supplier.routes");
const { supplyRecordRouter } = require("./router/supplyRecord.routes");

app.use("/supplier", supplierRouter);
app.use("/supplyRecord", supplyRecordRouter);

module.exports = app;
