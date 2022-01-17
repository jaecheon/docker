const express = require('express');
const app = express();
const port = 5000;
const engine = require('ejs');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false}));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', engine.renderFile);
app.engine('htm', engine.renderFile);

// app.get('/', (req, res) => res.send('hello node!!!'));

const route = (() => {
    app.get('/', (req, res) => {
        res.render('index.html');
    })

    app.get('/hello', (req, res) => {
        res.render('hello.htm');
    })

    app.get('/hello2', (req, res) => {
        res.render('hello2.htm');
    })

    app.get('/hello3', (req, res) => {
        res.render('hello3.htm');
    })
})();

app.listen(port, () => {
    console.log(`hello node listending at http://localhost:${port}`);
});