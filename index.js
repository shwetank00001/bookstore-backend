const express = require('express')
require('./db/connect')
const book = require('./routes/bookRoute')
const cors = require('cors')

const app = express()
app.use(cors())

//for reading json data in FE
app.use(express.urlencoded({ extended: false }));

// for reading json data i.e= postman
app.use(express.json());


app.get('/', (req,res)=> {
    res.send("HEllo")
})

app.use("/api/v1/book", book);


app.listen(5000, () => {
    console.log("App on PORT 5000")
})