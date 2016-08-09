'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (0, _express2.default)();
var PORT = 6483;

App.use((0, _compression2.default)());
App.use('/js', _express2.default.static(_path2.default.join(__dirname + '/app/js')));
App.use('/css', _express2.default.static(_path2.default.join(__dirname + '/app/css')));
App.get('/views', function (req, res) {
    _fs2.default.readFile(__dirname + '/../settings.json', 'utf8', function (err, data) {
        if (err) {
            console.log("Please define a settings json file before starting the server");
        }
        res.json(JSON.parse(data));
    });
});

App.get('*', function (req, res) {
    res.sendFile(_path2.default.join(__dirname + '/app/index.html'));
});

App.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Application listenting on port : ' + PORT);
    }
});