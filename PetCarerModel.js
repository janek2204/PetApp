import mongoose from "mongoose";

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
    priceperhour: { type: Number, required: true, minlength: 1, maxlength: 2 },
    availblebookings: { type: Date }, // here will go dates when carer has availbility to take pet
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
