const express = require('express')
const { createBook, getAllBooks, getOneBook, deleteBook, updateBook } = require('../controller/bookController')
const route = express.Router()

route.post('/', createBook)
route.get('/', getAllBooks)
route.get("/:id", getOneBook);
route.delete('/:id', deleteBook)
route.put('/:id', updateBook)

module.exports = route