var zetta = require('zetta');


zetta()
    .name('Zero Hub')
    .listen(1337, function () {
        console.log('Zetta is running at http://127.0.0.1:1337');
});
