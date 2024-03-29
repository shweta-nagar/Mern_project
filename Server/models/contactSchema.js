const mongoose = require("mongoose");
const contactScheema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Contact = new mongoose.model("Contact", contactScheema);

module.exports = Contact;