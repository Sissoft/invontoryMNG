const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Fixed the typo here
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`); // Use backticks for template literals
        });
    })
    .catch((error) => console.log(error)); // Changed 'err' to 'error'




