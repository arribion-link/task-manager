const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("Failed to fetch database connection string");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.info('Database connected successfully...')
    } catch (error) {
        console.error("Something went wrong connection to database", error);
    }
}

module.exports = {
    connectDB
}