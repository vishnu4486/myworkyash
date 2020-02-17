const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  categoryId: {
    type: String,
    require: true
  },
  categoryName: {
    type: String,
    require: true
  },
  created_At: {
    type: Date,
    default: Date.now
  },
  updated_At: {
    type: Date,
    default: Date.now
  }
});

const category = mongoose.model("category", categorySchema);
module.exports = category;
