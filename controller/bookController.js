const BookModel = require('../model/bookModel')

const createBook = async (req, res) => {
    try {

        const { title, author, publishYear} = req.body
        const book = await BookModel.create({ title, author, publishYear });
        res.status(200).json( {
            status: true,
            book
        })

    } catch (error) {
        res.status(400).send({
            state: false,
            message : error.msg
        })
    }
}

const getAllBooks = async (req,res) => {
    try {
        const book = await BookModel.find()
        res.status(200).json({
            success : true,
            book
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const getOneBook = async (req,res) => {
    try {
        const book = await BookModel.findById(req.params.id)
        res.status(200).json({
            success : true,
            book
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const deleteBook = async ( req,res) => {

    try {
        const book = await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: `Book with id: ${req.params.id} has been Deleted !`,
            book
        })
    } catch (error) {
        res.status(500).json(error.message)
    }


}

const updateBook = async (req,res) => {
    try {
        let book = await BookModel.findById(req.params.id)

        book = await BookModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            book
        })        
    } catch (error) {
        res.send({
            error: error.message
        })
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getOneBook,
    deleteBook,
    updateBook
}