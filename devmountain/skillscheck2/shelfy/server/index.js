
require('dotenv').config()
const express = require("express");
const massive =require('massive')
const controller = require('./controller')

const app = express();

console.log('hit express');



const { SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json());
app.use(express.static(__dirname + '../build'))

massive(CONNECTION_STRING).then(db => {
   
    app.set('db',db)
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`);
        })
  })
  .catch(err => console.log(err));

  app.get('/api/products', controller.getProducts)
  app.post('/api/product', controller.addProduct)
  app.delete('/api/inventory/:id', controller.deleteProduct)