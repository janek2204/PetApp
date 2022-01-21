import express from "express";
import {
  deletePetCarer,
  getAllPetCarers,
  loginPetCarer,
  registerPetCarer,
} from "../controlers/petCarer.js";

const router = express.Router();

router.route("/petCarers").get(getAllPetCarers);

router.route("/petCarerProfile/:id").delete(deletePetCarer);

router.route("/registerPetCarer").post(registerPetCarer);
router.route("/loginPetCarer").post(loginPetCarer);

export default router;
