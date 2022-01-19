import express from "express";
import mongoose from "mongoose";
import { port, dbURI } from "./config/enviroment.js";
import PetCarer from "./models/PetCarerModel.js";

const app = express();

app.use(express.json());

app.use((req, _res, next) => {
  console.log(
    `🧲 request coming from method ${req.method} from url '${req.url}'`
  );
  next();
});

app.get("/petcarers", async (_req, res) => {
  const carers = await PetCarer.find();
  return res.status(200).json(carers);
});

app.post("/petcarers", async (req, res) => {
  try {
    const newCarer = await PetCarer.create(req.body);
    return res.status(201).json(newCarer);
  } catch (err) {
    return res.status(422).json(err);
  }
});

app.get("/petcarers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const carerById = await PetCarer.findById({ _id: id });
    if (!carerById) throw new Error();
    return res.status(200).json(carerById);
  } catch (err) {
    return res.status(404).json({ message: "Not found" });
  }
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
  } catch (err) {
    console.log(err);
  }
};

startServer();
