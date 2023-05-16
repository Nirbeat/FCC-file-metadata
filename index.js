const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const mime = require('mime-types')

const app = express();

//tamaño
fs.statSync('package.json').size;
//nombre+extension
path.basename('package.json');

//mim-type
mime.lookup('package.json')

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
