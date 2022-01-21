import PetOwner from "../models/PetOwnerModel.js";
import jwt from "jsonwebtoken";
import { secret } from "../config/enviroment.js";

export const getAllPetOwners = async (_req, res) => {
  try {
    const allPetOwners = await PetOwner.find();
    return res.status(200).json(allPetOwners);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err.message });
  }
};

export const getPetOwnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const petOwner = await PetOwner.findById({ _id: id });
    if (!petOwner) throw new Error();
    return res.status(200).json(petOwner);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const deletePetOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const petOwnerToRemove = await PetOwner.findOneAndRemove({ _id: id });
    if (!petOwnerToRemove) throw new Error();
    return res
      .status(200)
      .json({ message: "Pet Owner data has been removed." });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const registerPetOwner = async (req, res) => {
  try {
    const newPetOwner = await PetOwner.create(req.body);
    return res
      .status(201)
      .json({ message: `Welcome ${newPetOwner.firstname}` });
  } catch (err) {
    return res.status(422).json(err);
  }
};

export const loginPetOwner = async (req, res) => {
  try {
    const petOwnerToLogin = await PetOwner.findOne({ email: req.body.email });
    if (
      !petOwnerToLogin ||
      !petOwnerToLogin.validatePassword(req.body.password)
    ) {
      throw new Error();
    }
    const token = jwt.sign({ sub: petOwnerToLogin._id }, secret, {
      expiresIn: "7 days",
    });
    return res
      .status(200)
      .json({ message: `Welcome back ${petOwnerToLogin.firstname}`, token });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
