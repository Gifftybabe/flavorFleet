import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const foodRouter = express.Router();

const uploadDir = path.resolve("uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

// Debugging log
console.log("Registering route: POST /add");
foodRouter.post("/add", upload.single("image"), (req, res, next) => {
  console.log("Inside POST /add route");
  if (req.file) {
    console.log("File uploaded successfully:", req.file);
    next();
  } else {
    console.error("File upload failed");
    res.status(400).send("File upload failed");
  }
}, addFood);

console.log("Registering route: GET /list");
foodRouter.get("/list", (req, res, next) => {
  console.log("Inside GET /list route");
  next();
}, listFood);

console.log("Registering route: POST /remove");
foodRouter.post("/remove", (req, res, next) => {
  console.log("Inside POST /remove route with body:", req.body);
  next();
}, removeFood);

export default foodRouter;
