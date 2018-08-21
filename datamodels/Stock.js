var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var stockSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: "useraccount"},
    item_type: String,
    item_name: String,
    item_description: String,
    quantity: Number,
    item_url: String,
    total_uses: Number,
    updated_at: Date,
    created_at: { type: Date, default: Date.now },
    
});

const Stock = mongoose.model("stock", stockSchema);

module.exports = Stock;

