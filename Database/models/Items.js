const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

const ItemModel = mongoose.model("Item", ItemSchema);
