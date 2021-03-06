"use strict";
const mongoose = require("mongoose")
    , fs = require("fs")
    , models_path = process.cwd() + "/datamodels/"
	, local = "mongodb://localhost:27017/paknplay"
	, remote = "mongodb://";

var currentEnvironment = local;

mongoose.Promise = global.Promise;
mongoose.connect(currentEnvironment, {server:{auto_reconnect:true}});

var db = mongoose.connection;

db.on("error", function (err) {
    console.error("MongoDB connection error:", err);
});

db.once("open", () => {
    console.info("MongoDB connection is established");
});

db.on("disconnected", function() {
    console.error("MongoDB disconnected!");
    mongoose.connect(currentEnvironment, {server:{auto_reconnect:true}});
});

db.on("reconnected", function () {
    console.info("MongoDB reconnected!");
});

fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf(".js"))
        require(models_path + file);
});