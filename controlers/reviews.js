import PetCarer from "../models/PetCarerModel.js";

export const showAllReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await PetCarer.findById(id).populate({
      path: "reviews",
      populate: {
        path: "owner",
        select: ["firstname", "lastname", "petdata"],
      },
    });
    return res.status(200).json(review.reviews);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const showReviewById = async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const findPetCarer = await PetCarer.findById(id);
    if (!findPetCarer) throw new Error();

    const review = findPetCarer.reviews.id(reviewId);
    if (!review) throw new Error();
    return res.status(200).json(review);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const petCarer = await PetCarer.findById(id);
    if (!petCarer) throw new Error();

    const newReview = { ...req.body, owner: req.currentUser._id };
    petCarer.reviews.push(newReview);
    await petCarer.save({ validateModifiedOnly: true });
    return res.status(201).json(petCarer);
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params;

    const petCarerProfile = await PetCarer.findById(id);
    if (!petCarerProfile) throw new Error();

    const reviewToDelete = petCarerProfile.reviews.id(reviewId);
    if (!reviewToDelete) throw new Error();

    if (req.currentUser._id.toString() != reviewToDelete.owner.toString())
      throw new Error("You can't delete this review! Go away!");
    await reviewToDelete.remove();
    await petCarerProfile.save({ validateModifiedOnly: true });
    return res.status(200).json({ message: "Review has been delted" });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
