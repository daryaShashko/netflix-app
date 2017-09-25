import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('*', (req, res) => res.sendfile(path.resolve(__dirname + '/../public/index.html')));

app.listen(process.env.PORT || 3000);