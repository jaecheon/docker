// https://brunch.co.kr/@toyongyeon/7
// https://blog.naver.com/zkfmapf123/222146647142
// tsc-watch
// https://blog.naver.com/honm94287/222174666568
import express from 'express';

const app = express();

app.get('/', (req:express.Request, res:express.Response) => {
    res.send('hello typescript 2!!!');
});

app.listen(3000, () => {
    console.log('example app listening on port 3000!!!');
});

