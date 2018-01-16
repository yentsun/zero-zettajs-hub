var zetta = require('zetta');
var TV = require('./tv.js');


zetta()
    .name('Zero Hub')
    .use(TV)
    .listen(1337, function () {
        console.log('Zetta is running at http://127.0.0.1:1337');
});
