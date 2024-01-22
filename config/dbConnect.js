require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error.message}`, "errLog.log");
  }
};

module.exports = connectDB;
