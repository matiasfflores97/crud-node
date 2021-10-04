const dotenv    = require('dotenv').config();
const fetch     = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url   = `https://${process.env.SHOPIFY_APY_KEY}:${process.env.SHOPIFY_APY_SECRET}@test-matias.myshopify.com/admin/api/2021-07/products`


// CRUD -> Create
exports.createProduct = async (req,res) => {
    let new_product = {
        product: {
            title: req.body.title,
            body_html: req.body.body_html,
            vendor: req.body.vendor,
            product_type: req.body.product_type,
            tags: req.body.tags
        }
    }
    let options = {
        method: 'POST',
        json: true,
        resolveWithFullResponse: true,
        body: JSON.stringify(new_product),
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
        }
    }

    try{
        const response = await fetch(url + '.json', options);
        const data = await response.json();
        res.json(data)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Read
exports.getProduct = async (req,res) => {
    let options = {
        method: 'get',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
        }
    }

    try{
        const response = await fetch(url + '.json', options);
        const data = await response.json();
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Update
exports.updateProduct = async(req,res) => {
    let options = {
        method: 'put',
        json: true,
        body: JSON.stringify(req.body),
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
        }
    }

    try{
        const response = await fetch(url + '/' + req.params.id, options)
        const data = await response.json()
        res.send(`Product ID: ${req.params.id} has been updated.`)
        // res.send(data)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Delete
exports.deleteProduct = async(req,res) => {
    let options = {
        method: 'delete',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
        }
    }

    try{
        const response = await fetch(url + '/' + req.params.id, options)
        const data = await response.json()
        res.send(`Product ID: ${req.params.id} has been deleted.`)
        // res.send(data)
    }catch(err){
        console.log(err)
    }
}