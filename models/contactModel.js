const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("contact", contactSchema);
