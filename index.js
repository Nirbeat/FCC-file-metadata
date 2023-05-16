const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const mime = require('mime-types');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const diskStorage= multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'images')
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname)
  }
})

app.post('/api/fileanalyse',multer({storage : diskStorage}).single('upfile'),(req,res,next)=>{

  res.json({
    name:req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
