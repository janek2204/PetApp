import PetCarer from "../models/PetCarerModel.js";
import jwt from "jsonwebtoken";
import { secret } from "../config/enviroment.js";

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

export const registerPetCarer = async (req, res) => {
  try {
    const newPetCarer = await PetCarer.create(req.body);
    return res
      .status(201)
      .json({ message: `Welcome ${newPetCarer.firstname}` });
  } catch (err) {
    return res.status(422).json(err);
  }
};

export const loginPetCarer = async (req, res) => {
  try {
    const petCarerToLogin = await PetCarer.findOne({ email: req.body.email });
    if (
      !petCarerToLogin ||
      !petCarerToLogin.validatePassword(req.body.password)
    ) {
      throw new Error();
    }
    const token = jwt.sign({ sub: petCarerToLogin._id }, secret, {
      expiresIn: "7 days",
    });
    return res
      .status(200)
      .json({ message: `Welcome back ${petCarerToLogin.firstname}`, token });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
