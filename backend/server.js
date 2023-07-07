const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { assesmentAPI, compile } = require('./API/assesments')
const getPost = require('./API/getpost')
const createPost = require('./API/createPost')
const userLogin = require("./API/loginUser");
const signUpRequest = require("./API/signUp.js");

app.use(cors());
app.use(express.json()); // Add this line to parse JSON payloads

const uri =
  "mongodb+srv://cobuild:Password1234@cobuildcluster.n2ze2yv.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Vikram");
  } catch (error) {
    console.log(error);
  }
}

connect();
app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.post('/compile', compile)
app.post('/createassesment', assesmentAPI)
app.post("/createpost", createPost);

app.post('/getpost', getPost)


app.post("/login", userLogin);
app.post("/signup", signUpRequest);
