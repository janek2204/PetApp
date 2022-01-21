import express from "express";
import {
  secureRoutePetCarer,
  secureRoutePetOwner,
} from "../config/secureRoute.js";
import {
  deletePetCarer,
  editPetCarerProfile,
  getAllPetCarers,
  getPetCarerById,
  loginPetCarer,
  registerPetCarer,
} from "../controlers/petCarer.js";
import {
  deletePetOwner,
  editPetOwnerProfile,
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
  .delete(secureRoutePetCarer, deletePetCarer)
  .get(getPetCarerById)
  .put(secureRoutePetCarer, editPetCarerProfile);
router.route("/registerPetCarer").post(registerPetCarer);
router.route("/loginPetCarer").post(loginPetCarer);

// Pet owner CRUD routes
router.route("/petOwners").get(getAllPetOwners);
router
  .route("/petOwnerProfile/:id")
  .delete(secureRoutePetOwner, deletePetOwner)
  .get(getPetOwnerById)
  .put(secureRoutePetOwner, editPetOwnerProfile);
router.route("/registerPetOwner").post(registerPetOwner);
router.route("/loginPetOwner").post(loginPetOwner);

export default router;
