import express from "express";
import { deletePetCarer, getAllPetCarers } from "../controlers/petCarer.js";

const router = express.Router();

router.route("/petCarers").get(getAllPetCarers);

router.route("/petCarerProfile/:id").delete(deletePetCarer);
