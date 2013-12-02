var Turret = require("turret");
var WebAppTurret = module.exports = function WebAppTurret(options) {
	Turret.call(this, options);
};
WebAppTurret.prototype = Object.create(Turret.prototype, {});