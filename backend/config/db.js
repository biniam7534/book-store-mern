import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB Atlas...");
        const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Atlas connection failed: ${error.message}`);
        console.log('Falling back to Local In-Memory MongoDB Server so you can continue developing...');

        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();

        const conn = await mongoose.connect(mongoUri);
        console.log(`Fallback In-Memory MongoDB Connected at: ${conn.connection.host}`);
    }
};

export default connectDB;