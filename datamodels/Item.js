var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    item_name: String,
    price: Number,
    purchased: Boolean
});

const Item = mongoose.model("item", itemSchema);

module.exports = Item;