import express from "express";
import { registerUser, loginUser, getMe, logoutUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import validate from "../middleware/validate.js";
import { validateRegister, validateLogin } from "../middleware/validators.js";

const router = express.Router();

router.post("/register", validate(validateRegister), registerUser);
router.post("/login", validate(validateLogin), loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getMe);

export default router;
