import PetCarer from "../models/PetCarerModel.js";
import PetOwner from "../models/PetOwnerModel.js";
import jwt from "jsonwebtoken";
import { secret } from "./enviroment.js";

export const secureRoutePetCarer = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error();
    const token = req.headers.authorization.replace("Bearer ", "");
    const payload = jwt.verify(token, secret);
    const petCarerToVerify = await PetCarer.findById(payload.sub);
    if (!petCarerToVerify) throw new Error();
    req.currentUser = petCarerToVerify;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

export const secureRoutePetOwner = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error();
    const token = req.headers.authorization.replace("Bearer ", "");
    const payload = jwt.verify(token, secret);
    const petOwnerToVerify = await PetOwner.findById(payload.sub);
    if (!petOwnerToVerify) throw new Error();
    req.currentUser = petOwnerToVerify;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
