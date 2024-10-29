const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testingTheDatabase");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

connectDB();

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {type: mongoose.Schema.Types.ObjectId, ref: "post"} 
    ]
});

module.exports = mongoose.model('User', userSchema);