import express from 'express';
import path from 'path';

//const PUBLIC_PATH = path.resolve(__dirname, '../../public');

const app = express();

/*app.all('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});*/
app.use('/', express.static(__dirname + '/../public'));
/*
app.use('/', express.static(__dirname + 'public'));*/

app.listen(process.env.PORT || 3000);