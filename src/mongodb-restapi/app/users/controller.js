import { ObjectId } from "mongodb";
import fs from "fs";
import path from "path";
import User from "./models.js";

export const getAllUser = (req, res) => {
  const { search } = req.query;
  if (search) {
    User.find({ name: { $regex: ".*" + search + ".*" } })
      .exec()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    User.find({})
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
};

export const getUser = (req, res) => {
  User.findById({ _id: new ObjectId(req.params.id) })
    .exec()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

export const deleteUser = (req, res) => {
  User.deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => res.send({ response: "Delete Success!" }))
    .catch((err) => res.send(err));
};

export const createUser = (req, res) => {
  const { name, role, address, status } = req.body;
  const image = req.file;
  const __dirname = path.resolve();

  if (image) {
    const target = path.join(__dirname, "assets", image.originalname);
    fs.renameSync(image.path, target);
    User.create({
      name,
      role,
      address,
      status,
      image_url: `http://localhost:3001/public/${image.originalname}`,
    })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    User.create({
      name,
      role,
      address,
      status,
    })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
};

export const updateUser = (req, res) => {
  const { name, role, address, status } = req.body;
  const image = req.file;
  const id = req.params.id;
  const __dirname = path.resolve();

  if (image) {
    const target = path.join(__dirname, "assets", image.originalname);
    fs.renameSync(image.path, target);
    User.updateOne({
      name,
      role,
      address,
      status,
      image_url: `http://localhost:3001/public/${image.originalname}`,
    }).where("_id").equals(id)
      .then((result) => res.send({ response: "Success Updated", result }))
      .catch((err) => res.send(err));
  } else {
    User.updateOne({
      name,
      role,
      address,
      status,
    }).where("_id").equals(id)
      .then((result) => res.send({ response: "Success Updated", result }))
      .catch((err) => res.send(err));
  }
};
