import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";

const reviewSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    owner: { type: mongoose.Schema.ObjectId, ref: "PetCarer" }, // this will go when we will do authorization bit
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

const petOwnerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, maxlength: 15, minlength: 2 },
    lastname: { type: String, required: true, maxlength: 20, minlength: 5 },
    email: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 12,
      unique: true,
    },
    password: { type: String, required: true, minlength: 4 },
    phonenumber: { type: Number, minlength: 8, unique: true },
    profileimage: { type: String, required: false, maxlength: 50 },
    accounttype: { type: String, required: true },,
    aboutme: { type: String, maxlength: 500, required: true },
    recomendetcarers: [{}], // here will go carers who owner recomends
    petdata: {
      name: { type: String, required: true, maxlength: 15 },
      image: { type: String, required: true },
      age: { type: Number, maxlength: 2, required: true },
      description: { type: String, required: true, maxlength: 500 },
      reviews: [reviewSchema], // here will go reviews from carers
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

// * RATINGS
// * virtual getter -> virtual field, added to the object before its returned as JSON
petOwnerSchema
  .virtual("averageRating") // * define name of new key for the virtual field
  .get(function () {
    // * if there are no comments, return a string
    if (!this.petdata.reviews.length) return "Not rated yet";
    // * iterate through the comments array, add up all of the ratings
    const sumOfRatings = this.petdata.reviews.reduce((acc, review) => {
      if (!review.rating) return acc;
      return acc + review.rating;
    }, 0);
    // * return the average of the ratings, fixed to 2 decimal places
    return (sumOfRatings / this.petdata.reviews.length).toFixed(2);
  });
petOwnerSchema.set("toJSON", { virtuals: true });
// rember to ad plugin with unique validator

// * Remove password when returning user as JSON in the response, that happens in the controllers
petOwnerSchema.set("toJSON", {
  // * when data is set to json in the response (in controllers)
  virtuals: true,
  transform(_doc, json) {
    delete json.password; // * delete password key from json object
    return json; // * return the rest of the object
  },
});

// * Create virtual field for the password confirmation
petOwnerSchema
  .virtual("passwordConfirmation") // * define name of the virtual field
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation; // * set the value of the virtual field to be the value of the passwordConfirmation that comes in with the request body
  });

// * Custom pre validation, will happen before mongoose does its own validation to check data types etc
// * this.isModified -> checks if password is new, or if password has been updated
petOwnerSchema.pre("validate", function (next) {
  if (
    this.isModified("password") &&
    this.password !== this._passwordConfirmation
  ) {
    this.invalidate("passwordConfirmation", "does not match"); // * throw an error if password is new or updated and doesnt match the password confirmation
  }
  next();
});

// * Custom pre save, will happen after mongoose validation, but before anything is saved to the db
// * Need to hash the password to make sure we dont save plain text passwords

petOwnerSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    // * check if password is new or has been updated
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync()); // * hash the password and set result as value of password field
  }
  next(); // * move on to mongoose saving into the db
});
// * defining a custom method that will be available to use on all instances of the user
petOwnerSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}; // * this function will hash incoming password and compare with hashed password stored in the d

petOwnerSchema.plugin(uniqueValidator);
export default mongoose.model("PetOwner", petOwnerSchema);
