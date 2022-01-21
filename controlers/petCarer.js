import PetCarer from "../models/PetCarerModel.js";

export const getAllPetCarers = async (_req, res) => {
  try {
    const allPetCarers = await PetCarer.find();
    return res.status(200).json(allPetCarers);
  } catch (err) {
    return res.status(404).json({ message: "Can't find users" });
  }
};

export const deletePetCarer = async (req, res) => {
  try {
    const { id } = req.params;
    const petCarerToRemove = await PetCarer.findOneAndRemove({ _id: id });
    if (!petCarerToRemove) throw new Error();
    return res
      .status(200)
      .json({ message: "Pet Carer data has been removed." });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
