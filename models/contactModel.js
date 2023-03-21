const mongoose = require("mongoose");
const validator = require("validator");
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  first_name: {
    type: String,
    required: [true, "Please Enter Your First Name"],
  },
  last_name: {
    type: String,
    required: [true, "Please Enter Your Last Name"],
  },
  mobile_number: {
    type: Number,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("contact", contactSchema);
