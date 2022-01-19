import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    owner: { type: mongoose.Schema.ObjectId, ref: "PetOwner" }, // this will go when we will do authorization bit
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

const petCarerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, maxlength: 15, minlength: 2 },
    lastname: { type: String, required: true, maxlength: 20, minlength: 5 },
    email: { type: String, required: true, maxlength: 30, minlength: 12 },
    password: { type: String, required: true, minlength: 4 },
    phonenumber: { type: Number, minlength: 8 },
    profileimage: { type: String, required: false, maxlength: 50 },
    aboutme: { type: String, maxlength: 500, required: true },
    reviews: [reviewSchema], //here will go reviews from pet owners
    preferedPets: { type: String, required: true },
    priceperhour: { type: Number, required: true, minlength: 1, maxlength: 2 },
    availblebookings: { from: { type: Date }, to: { type: Date } }, // here will go dates when carer has availbility to take pet
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

// * RATINGS
// * virtual getter -> virtual field, added to the object before its returned as JSON
petCarerSchema
  .virtual("averageRating") // * define name of new key for the virtual field
  .get(function () {
    // * if there are no comments, return a string
    if (!this.reviews.length) return "Not rated yet";
    // * iterate through the comments array, add up all of the ratings
    const sumOfRatings = this.reviews.reduce((acc, review) => {
      if (!review.rating) return acc;
      return acc + review.rating;
    }, 0);
    // * return the average of the ratings, fixed to 2 decimal places
    return (sumOfRatings / this.reviews.length).toFixed(2);
  });
petCarerSchema.set("toJSON", { virtuals: true });
// rember to ad plugin with unique validator

export default mongoose.model("PetCarer", petCarerSchema);
