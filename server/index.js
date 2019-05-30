const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3663;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/*', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));