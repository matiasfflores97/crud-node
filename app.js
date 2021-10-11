const express   = require('express');
const app       = express();
const PORT      = 3000;
const allowlist = ['http://localhost:3000', 'https://test-matias.myshopify.com'];

// Global Variables
exports.router  = express.Router();
exports.cors    = require('cors');
exports.dotenv    = require('dotenv').config();
exports.fetch     = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
exports.corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// Parse incoming request bodies in a middleware before your handlers
app.use(express.json());

// Static route
app.use(express.static(__dirname + "/public"))

// Routes
app.use('/', require('./routes/indexRoute'))
app.use('/products', require('./routes/productsRoute'))
app.use('/variants', require('./routes/variantsRoute'))
app.use('/products', require('./routes/variantsRoute'))

// Page 404
app.use((req, res, next) => {
    res.status(404).json('404 NOT FOUND')
})

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})