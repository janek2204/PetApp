import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 4000;
const dbURI = "mongodb://localhost/pet-app-api";

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("😎 database has connected successfully");
    app.listen(port, () =>
      console.log(`🍻 Express is up and running on port ${4000}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
