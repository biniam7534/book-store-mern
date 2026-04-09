import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGODB_URL;
        if (!uri) {
            console.error("❌ ERROR: MONGO_URI is not defined in Environment Variables!");
            process.exit(1);
        }

        console.log("⏳ Attempting to connect to MongoDB Atlas...");
        const conn = await mongoose.connect(uri);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Failed!`);
        console.error(`Error details: ${error.message}`);

        if (error.message.includes('MongooseServerSelectionError') || error.message.includes('ETIMEDOUT')) {
            console.error("👉 Tip: Check your MongoDB Atlas Network Access (IP Whitelist). Make sure it is set to 0.0.0.0/0");
        }

        process.exit(1);
    }
};

export default connectDB;