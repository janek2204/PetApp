import PetCarer from "../models/PetCarerModel.js";
import jwt from "jsonwebtoken";
import { secret } from "../config/enviroment.js";

export const getAllPetCarers = async (_req, res) => {
  try {
    const allPetCarers = await PetCarer.find();
    if (!allPetCarers) throw new Error();
    return res.status(200).json(allPetCarers);
  } catch (err) {
    return res.status(404).json({ message: "Can't find users" });
  }
};

export const getPetCarerById = async (req, res) => {
  try {
    const { id } = req.params;
    const petCarer = await PetCarer.findById({ _id: id });
    if (!petCarer) throw new Error();
    return res.status(200).json(petCarer);
  } catch (err) {
    return res.status(404).json({ message: "Can't find user" });
  }
};

export const editPetCarerProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (id != req.currentUser._id.toString())
      throw new Error("You can't edit this profile! Go away!");

    const petCarerToUpdate = await PetCarer.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    if (!petCarerToUpdate) throw new Error();
    if (!petCarerToUpdate._id.equals(req.currentUser._id))
      throw new Error("Unauthorized");
    return res.status(200).json(petCarerToUpdate);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const deletePetCarer = async (req, res) => {
  try {
    const { id } = req.params;

    if (id != req.currentUser._id.toString())
      throw new Error("You can't remove this profile! Go away!");

    const petCarerToRemove = await PetCarer.findByIdAndDelete({ _id: id });
    if (!petCarerToRemove) throw new Error("Can't find this profile");

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
    return res.status(404).json({ message: err.message });
  }
};
