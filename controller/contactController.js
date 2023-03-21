const contact = require("../models/contactModel");
exports.createContact = async (req, res) => {
  //   console.log(req.body);
  try {
    const { last_name, first_name, email, mobile_number } = req.body;
    if (!last_name || !first_name || !email || !mobile_number)
      throw new Error("Missing required fields");
    const createContact = await contact.create({
      first_name,
      last_name,
      email,
      mobile_number,
      createdAt: Date.now(),
    });
    res.status(200).json({ success: true, createContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
exports.updateContact = async (req, res) => {
  try {
    const { id, email, mobile_number } = req.body;
    const data = await contact.findById(id);
    data.mobile_number = mobile_number;
    data.email = email;
    data.save();
    res
      .status(200)
      .json({ success: true, message: "Updated Successfully", data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
exports.getAllContact = async (req, res) => {
  try {
    const data = await contact.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
exports.deleteContact = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await contact.findById(id);
    if (!data) {
      throw new Error("Contact not found");
    }
    data.remove();
    res.status(200).json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};
exports.getOneContact = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await contact.findById(id);
    if (!data) {
      throw new Error("Contact not found");
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
