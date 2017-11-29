import express from 'express';
import path from 'path';
import handleRender from './../client/src/server/handleRender.js';

const app = express();

app.use(express.static(__dirname + '/../public'));

//app.get('*', (req, res) => res.sendfile(path.resolve(__dirname + '/../public/index.html')));

app.get('*', handleRender);

app.listen(process.env.PORT || 3000);