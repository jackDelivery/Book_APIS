const asyncHandler = require("express-async-handler");
const { BookModel } = require("../models/BookModel");


const create = asyncHandler(async (req, res) => {
    const { title, author, genre } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).send("All Field Required")
    }

    try {
        const newBook = new BookModel({ title, author, genre });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


// get All
const GetAll = asyncHandler(async (req, res) => {
    try {
        const books = await BookModel.find();

        if (!books) {
            return res.status(404).send("Books Not Found")
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


// update
const Update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;

    try {
        const updatedBook = await BookModel.findByIdAndUpdate(id, { title, author, genre }, { new: true });
        if (!updatedBook) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json(updatedBook);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// signal
const Signal = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const book = await BookModel.findById(id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



// delete
const deleteBook = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json(deletedBook);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = { create, GetAll, Signal, Update, deleteBook }