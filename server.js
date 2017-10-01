const express = require('express');
const app     = express();
const port    = process.env.PORT || 2080;


app.use(express.static('public'));



app.listen(port, ()=> {
  console.log('listenin bruh');
})
