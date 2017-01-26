const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes')(app);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});