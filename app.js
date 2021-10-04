const express   = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.json());

// Static route
app.use(express.static(__dirname + "/public"))

// Routes
app.use('/', require('./routes/index'))
app.use('/products', require('./routes/products'))

app.use((req, res, next) => {
    res.status(404).json('404 NOT FOUND')
})

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})