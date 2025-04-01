const express = require("express");
const dotenv = require("dotenv");
const DatabaseConnection = require("./Database/config/db");
const cors = require("cors");
const ItemModel = require("./Database/models/Items"); // Import the model

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
DatabaseConnection();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
