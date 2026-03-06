import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookroutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the BookStore API" });
});

// API Routes
app.use("/api/books", bookRoutes);

// Connect to database and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});