const express = require('express')
require('./db/connect')

const app = express()

app.get('/', (req,res)=> {
    res.send("HEllo")
})

app.listen(5000, () => {
    console.log("App on PORT 5000")
})