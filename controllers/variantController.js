const { dotenv, fetch } = require('../app');
const url   = `https://${process.env.SHOPIFY_APY_KEY}:${process.env.SHOPIFY_APY_SECRET}@test-matias.myshopify.com/admin/api/2021-10/`

let options = {}
function fetchOptions(http_method, req){
    if(http_method == 'POST' || http_method == 'PUT'){
        options = {
            method: http_method,
            json: true,
            body: JSON.stringify(req.body),
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
            }
        }
    }else{
        options = {
            method: http_method,
            json: true,
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': `${process.env.SHOPIFY_APY_SECRET}`
            }
        }
    }
}

// CRUD -> Create
exports.createVariant = async (req,res) => {
    fetchOptions('POST', req)

    try{
        const response = await fetch(url + `products/${req.params.id}/variants.json`, options);
        const data = await response.json()
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Read
exports.getVariant = async (req,res) => {
    fetchOptions('GET', req)

    try{
        const response = await fetch(url + `products/${req.params.id}/variants.json`, options);
        const data = await response.json()
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Update
exports.updateVariant = async (req,res) => {
    fetchOptions('PUT', req)

    try{
        const response = await fetch(url + `/variants/${req.params.id}.json`, options);
        const data = await response.json();

       res.send(`Variant ID: ${ req.params.id } has been updated.`)
    }catch(err){
        console.log(err)
    }
}

// CRUD -> Delete
exports.deleteVariant = async (req,res) => {
    fetchOptions('DELETE', req)

    try{
        const response = await fetch(url + `products/${req.params.id}/variants/${req.params.v_id}.json`, options)
        const data = response.json()
        
        res.send(`Variant ID: ${req.params.v_id} has been deleted`)
    }catch(err){
        console.log(err)
    }
}


