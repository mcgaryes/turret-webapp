#! /usr/bin/env node

var TurretWebApp = require("./turret-webapp");
var pgrm = new TurretWebApp({
	dirname: __dirname
});
pgrm.start();