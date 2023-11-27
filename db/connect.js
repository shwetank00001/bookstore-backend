const mongoose = require('mongoose')

const mongoUri ="mongodb+srv://shwetank:shwetank@bookstore.b15enz9.mongodb.net/?retryWrites=true&w=majority";



const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB !")
    }
}

connectDB()