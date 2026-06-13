import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createListing,
  getAllListings,
  getListingById,
  deleteListing,
  updateListing,
} from "../controllers/listingController.js";
import validate from "../middleware/validate.js";
import { validateListing } from "../middleware/validators.js";

const router = express.Router();

router.get("/", getAllListings);
router.get("/:id", getListingById);

router.post("/", protect, validate(validateListing), createListing);
router.put("/:id", protect, validate(validateListing), updateListing);
router.delete("/:id", protect, deleteListing);

export default router;
