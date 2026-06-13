import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createBooking, getMyBookings } from "../controllers/bookingController.js";
import validate from "../middleware/validate.js";
import { validateBooking } from "../middleware/validators.js";

const router = express.Router();

router.post("/", protect, validate(validateBooking), createBooking);
router.get("/me", protect, getMyBookings);

export default router;
