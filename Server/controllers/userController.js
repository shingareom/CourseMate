import User from "../models/User.js";

// Registration
export const registerUser = async (req, res) => {
  console.log("REQ.BODY:", req.body);
  console.log("REQ.FILE:", req.file);

  try {
    const { name, contactNo, address, email, password } = req.body;
    const profileImage = req.file ? req.file.filename : null;

    // check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({
      name,
      contactNo,
      address,
      email,
      password, // plain text password (you can hash later)
      profileImage,
    });

    await user.save();
    console.log("User saved:", user);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Registration failed", details: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Plain text comparison
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", details: err.message });
  }
};
