import express from "express";
import multer from "multer";

import {
  deleteUser,
  getAllUser,
  getUser,
  createUser,
  updateUser,
} from "./controller.js";

const router = express();
const uploads = multer({ dest: "assets" });

router.get("/users", getAllUser);
router.get("/user/:id", getUser);
router.post("/user", uploads.single("image"), createUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", uploads.single("image"), updateUser);


export default router;
