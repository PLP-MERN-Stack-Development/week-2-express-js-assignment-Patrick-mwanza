const Product = require('./Product'); 
const express = require('express');
const router = express.Router();

// create a new product

router.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.error(error);  
        res.status(400).send(error);
    }
});

// get all product
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        console.error(error);  
        res.status(500).send(error);
    }
});

// get a single product by id
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send();
            res.send(product);

    } catch (error) {
        res.status(500).send(error);
    }
});
// update a product by id
router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});
// delete a product by id
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
