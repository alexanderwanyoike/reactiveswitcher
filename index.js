import Express from 'express';
import fs from 'fs'
import compression from 'compression';
import path from 'path';
const App = Express();
const PORT = 6483;

App.use(compression());
App.use(Express.static('build'));
App.get('/views', (req, res) => {
    fs.readFile(__dirname + '/../settings.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Please define a settings json file before starting the server");
        }
        res.json(JSON.parse(data));
    });
});

App.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

App.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Application listenting on port : ${PORT}`);
    }
});
