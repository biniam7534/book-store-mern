import Book from "../models/bookModel.js";

// @desc    Create a new book
// @route   POST /api/books
export const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: "Please provide all fields: title, author, publishYear" });
        }

        const newBook = await Book.create({ title, author, publishYear });

        return res.status(201).json(newBook);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get all books
// @route   GET /api/books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Update a book by ID
// @route   PUT /api/books/:id
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: "Please provide all fields: title, author, publishYear" });
        }

        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(updatedBook);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a book by ID
// @route   DELETE /api/books/:id
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};