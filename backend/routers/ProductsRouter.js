const express = require('express');
const products = require('../database/products.json');

const ProductsRouter = express.Router();

ProductsRouter.get(
    '/', 
    (req, res) => 
    {
        try
        {   
            res.send(products);
        }
        catch(error)
        {
            res.status(400).send([]);
        }
        
    }
)

module.exports = ProductsRouter;