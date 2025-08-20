import express from "express";
import multer from "multer";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Registration route
router.post("/register", upload.single("profileImage"), registerUser);

// Login route
router.post("/login", loginUser);

export default router;
