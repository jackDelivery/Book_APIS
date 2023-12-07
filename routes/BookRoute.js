const express = require("express");
const router = express.Router();
const { GetAll, Signal, Update, create, deleteBook } = require("../Controller/BookController")



router.route("/book").post(create);
router.route("/book").get(GetAll);
router.route("/book/:id").get(Signal);
router.route("/book/:id").put(Update);
router.route("/book/:id").delete(deleteBook)










module.exports = router;