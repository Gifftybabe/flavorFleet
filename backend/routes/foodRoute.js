// import express from "express";
// import {addFood} from "../controllers/foodController.js";
// import multer from "multer";

// const foodRouter = express.Router();



// // image storage engine

// const storage = multer.diskStorage({
//   destination:"uploads",
//   filename:(req,file,cb)=>{
//     return cb(null,`${Date.now()}${file.originalname}`);
//   }
// });

// const upload = multer({storage:storage});

// foodRouter.post("/add",upload.single("image"),addFood);

// export default foodRouter;




import express from "express";
import { addFood,listFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import foodModel from "../models/foodModel.js";

const foodRouter = express.Router();

// Ensure the uploads directory exists
const uploadDir = path.resolve("uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created directory: ${uploadDir}`);
} else {
  console.log(`Directory already exists: ${uploadDir}`);
}

// Image storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(`Saving to: ${uploadDir}`);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    console.log(`Generated filename: ${filename}`);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), (req, res, next) => {
  if (req.file) {
    console.log("File uploaded successfully:", req.file);
    next();
  } else {
    console.error("File upload failed");
    res.status(400).send("File upload failed");
  }
}, addFood);
foodRouter.get("/list",listFood)

export default foodRouter;
