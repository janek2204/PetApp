import express from "express";
import {
  deletePetCarer,
  getAllPetCarers,
  getPetCarerById,
  loginPetCarer,
  registerPetCarer,
} from "../controlers/petCarer.js";
import {
  deletePetOwner,
  getAllPetOwners,
  getPetOwnerById,
  loginPetOwner,
  registerPetOwner,
} from "../controlers/petOwner.js";

const router = express.Router();

// Pet carer CRUD routes
router.route("/petCarers").get(getAllPetCarers);
router
  .route("/petCarerProfile/:id")
  .delete(deletePetCarer)
  .get(getPetCarerById);
router.route("/registerPetCarer").post(registerPetCarer);
router.route("/loginPetCarer").post(loginPetCarer);

// Pet owner CRUD routes
router.route("/petOwners").get(getAllPetOwners);
router
  .route("/petOwnerProfile/:id")
  .delete(deletePetOwner)
  .get(getPetOwnerById);
router.route("/registerPetOwner").post(registerPetOwner);
router.route("/loginPetOwner").post(loginPetOwner);

export default router;
