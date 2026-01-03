import express from "express";
import { protect } from "../middleware/amw.js";
import {
  createListing,
  getAllListings,
  getListingById,
  deleteListing,
  updateListing
} from "../controllers/listingController.js";

const router = express.Router();

router.get("/", getAllListings);
router.get("/:id", getListingById);



// protected routes
router.post("/", protect, createListing);
router.delete("/:id", protect, deleteListing);
router.put("/:id", protect, updateListing);

export default router;
