import mongoose from "mongoose";

const petOwnerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, maxlength: 15, minlength: 2 },
    lastname: { type: String, required: true, maxlength: 20, minlength: 5 },
    email: { type: String, required: true, maxlength: 30, minlength: 12 },
    password: { type: String, required: true, minlength: 4 },
    phonenumber: { type: Number, minlength: 8 },
    profileimage: { type: String, required: false, maxlength: 50 },
    aboutme: { type: String, maxlength: 500, required: true },
    petdata: {
      name: { type: String, required: true, maxlength: 15 },
      image: { type: String, required: true },
      age: { type: Number, maxlength: 2, required: true },
      description: { type: String, required: true, maxlength: 500 },
      reviews: [{}], // here will go reviews from carers
    },
    address: {
      street: { type: String, required: true, minlength: 2 },
      housenumber: { type: Number, required: true, minlength: 1, maxlength: 5 },
      postcode: { type: String, required: true, minlength: 5, maxlength: 7 },
      city: { type: String, required: true, maxlength: 15 },
    },
  },
  { timestamps: true }
);