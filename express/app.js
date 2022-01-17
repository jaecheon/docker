const express = require('express');
const app = express();
const port = 4100;
const engine = require('ejs');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false}));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

// https://kingle1024.tistory.com/163
// can not find module 'html'
app.engine('html', engine.renderFile);
app.engine('htm', engine.renderFile);

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
})();

let server = app.listen(port, () => {
    console.log(`express server using nodemon has started on port:${port}`);
});
