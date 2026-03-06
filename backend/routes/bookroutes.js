import express from "express";
import {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
} from "../contorollers/bookControllers.js";

const router = express.Router();

// POST   /api/books      - Create a new book
router.post("/", createBook);

// GET    /api/books      - Get all books
router.get("/", getAllBooks);

// GET    /api/books/:id  - Get a single book
router.get("/:id", getBookById);

// PUT    /api/books/:id  - Update a book
router.put("/:id", updateBook);

// DELETE /api/books/:id  - Delete a book
router.delete("/:id", deleteBook);

export default router;