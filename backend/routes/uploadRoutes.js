import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// multer memory storage 
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Niwaas-v3" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Upload failed", error });
        }
        return res.json({ url: result.secure_url });
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);

  } catch (err) {
    console.error("Upload Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
