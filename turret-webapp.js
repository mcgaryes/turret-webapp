var exec = require('child_process').exec;
var Turret = require("turret").Turret;
var log = require("turret").log;

var WebAppTurret = module.exports = function WebAppTurret(options) {
	Turret.call(this, options);
};

WebAppTurret.prototype = Object.create(Turret.prototype, {

	/**
	 * ! Overridden: Installs components for the project
	 * @param {Function} callback Callback when install is complete
	 */
	install: {
		value: function finish(callback) {
			log.info("Installing components...");
			exec(["npm install", "bower install", "grunt install", "grunt compile"].join("&&"), {
				cwd: process.cwd()
			}, function(err, stdout, stderr) {
				console.log(err);
				callback(err);
			});
		}
	}
});