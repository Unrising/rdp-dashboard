require('doteenv').config();

const express = require("express");
const mongoose = require("mangoose");
const app = express();
const PORT = process.env.PORT || 5000;

mangoose.connect(process.env.MANGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => console.log('MangoDB Connected'))
  .catch(err => console.log(err));


app.listen(PORT,() => console.log(`Server is listenning to port : ${PORT}`));

