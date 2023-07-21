const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentsSchema = new Schema({
  title: { type: String, required: true },
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model("Contents", contentsSchema);
