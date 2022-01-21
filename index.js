import express from "express";
import mongoose from "mongoose";
import router from "./config/router.js";
import { port, dbURI } from "./config/enviroment.js";

const app = express();

app.use((req, _res, next) => {
  console.log(
    `🧲 request coming from method ${req.method} from url '${req.url}'`
  );
  next();
});

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
    // await mongoose.connection.db.dropDatabase();
    app.use(express.json());
    app.use("/api", router);
  } catch (err) {
    console.log(err);
  }
};

startServer();
