const express = require("express");
const {
  createContact,
  getAllContact,
  updateContact,
  deleteContact, 
  getOneContact,
} = require("../controller/contactController");
const router = express.Router();
router.route("/create").post(createContact);
router.route("/getAll").get(getAllContact);
router.route("/update").put(updateContact);
router.route("/delete/:id").delete(deleteContact);
router.route("/contact/:id").get(getOneContact);
module.exports = router;
