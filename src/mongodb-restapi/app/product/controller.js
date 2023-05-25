import { ObjectId } from "mongodb";
import fs from "fs";
import path from "path";

import db from "../../config/mongodb.js";

export const getAllProducts = (req, res) => {
  const { search } = req.query;
  if (search) {
    db.collection("products")
      .find({ name: /search/ })
      .toArray()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    db.collection("products")
      .find()
      .toArray()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
};

export const getProduct = (req, res) => {
  db.collection("products")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

export const deleteProduct = (req, res)=>{
db.collection("products")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => res.send({response:"Delete Success!"}))
    .catch((err) => res.send(err));
}

export const postProduct = (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  const __dirname = path.resolve()

  if (image) {
    const target = path.join(__dirname, "assets", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("products")
      .insertOne({
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:3001/public/${image.originalname}`,
      })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    db.collection("products")
      .insertOne({
        name,
        price,
        stock,
        status,
      })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
};
