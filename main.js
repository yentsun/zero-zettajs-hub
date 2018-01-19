var zetta = require('zetta');
var TV = require('./tv');


var logic = function (server) {
    var sensor = server.from('Neo Hub').where({type: 'sound_sensor'});
    var tv = server.where({type: 'tv'});
    server.observe([sensor, tv], function (s, tv) {
        console.log('observing sensor...');
        s.streams.snapped.on('data', function(m) {
            console.log('i heard a snap!', m);
            if (tv.available('turn-on')) {
                tv.call('turn-on');
            } else if (tv.available('turn-off')) {
                tv.call('turn-off');
            }
        });
    });
};

zetta()
    .name('Zero Hub')
    .use(TV)
    .link('http://192.168.0.101:1337/')
    .use(logic)
    .listen(1337, function () {
        console.log('Zetta is running at http://127.0.0.1:1337');
});
