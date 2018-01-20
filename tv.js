var lirc = require('lirc_node');
var Device = require('zetta').Device;
var util = require('util');


var TV = module.exports = function () {
    Device.call(this);
};
util.inherits(TV, Device);

TV.prototype.init = function (config) {
    config
        .type('tv')
        .state('off')
        .name('TV');

    config
        .when('off', {allow: ['turn-on']})
        .when('on', {allow: ['turn-off']})
        .map('turn-off', this.turnOff)
        .map('turn-on', this.turnOn)
};

TV.prototype.turnOff = function (done) {
    this.state = 'off';
    lirc.irsend.send_once('tv', 'key_power', function () {
        console.log("tv power command sent");
        done();
    });
};

TV.prototype.turnOn = function (done) {
    this.state = 'on';
    lirc.irsend.send_once('tv', 'key_power', function () {
        console.log("tv power command sent");
        done();
    });
};
