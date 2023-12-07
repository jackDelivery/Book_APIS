require("dotenv").config({});
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


const bookRoute = require("./routes/BookRoute");



// middleware here
app.use(cors("*"));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json())


app.get(`/`, (req, res) => {
    res.status(200).send("BOOKS APIS");
  })
  
  app.use("*", (req, res, next) => {
    res.status(400).send("Page Not Found!");
    next()
  })


app.use(bookRoute)


// database start
mongoose.connect(process.env.DATABASE).then((res) => {
    console.log(`Database Connected`)
}).catch(err => console.log(err))





// server start
app.listen(PORT, () => console.log(`Your Server is running on ${PORT}`))