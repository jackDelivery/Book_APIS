const mongoose = require('mongoose');
const { Schema } = mongoose;



const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    }
})


const BookModel = mongoose.model("BOOK", BookSchema);

module.exports = {BookModel}