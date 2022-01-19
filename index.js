import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 4000;
const dbURI = "mongodb://localhost/pet-app-api";

const petCarerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, maxlength: 15, minlength: 2 },
    lastname: { type: String, required: true, maxlength: 20, minlength: 5 },
    email: { type: String, required: true, maxlength: 30, minlength: 12 },
    password: { type: String, required: true, minlength: 4 },
    phonenumber: { type: Number, minlength: 8 },
    profileimage: { type: String, required: false, maxlength: 50 },
    aboutme: { type: String, maxlength: 500, required: true },
    reviews: [{}], //here will go reviews from pet owners
    preferedPets: { type: String, required: true },
    petslookedafter: [{}], //here will go pets which carer was looking after
    address: {
      street: { type: String, required: true, minlength: 2 },
      housenumber: { type: Number, required: true, minlength: 1, maxlength: 5 },
      postcode: { type: String, required: true, minlength: 5, maxlength: 7 },
      city: { type: String, required: true, maxlength: 15 },
    },
  },
  { timestamps: true }
);

const PetCarer = mongoose.model("PetCarer", petCarerSchema);

app.use((req, _res, next) => {
  console.log(`🧲 request coming from method${req.method} from url ${req.url}`);
  next();
});

app.get("/petcarers", (_req, res) => {
  const carers = PetCarer.find();
  console.log("pet carers ->", carers);
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
