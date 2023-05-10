import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

const route = express();
const upload = multer({ dest: "assets" });

route.get("/", (req, res) => {
  res.end("<h1>Welcome to My Web!</h1>");
});

route.get("/about", (req, res) => {
  const { url } = req;
  const html = `
  <h1>Halaman About</h1>
  <p>Ini adalah halaman about</p>
  `;

  console.log(url);
  res.send(html);
  res.end();
});

route.get("/category/:name", (req, res) => {
  const params = req.params.name;
  const html = `
  <h1>Halaman Category</h1>
  <p>Ini adalah halaman category ${params.toUpperCase()}</p>
  `;

  res.send(html);
  res.end();
});

route.get("/q", (req, res) => {
  const { query, tag } = req;

  res.json({
    status: 200,
    message: "Query Parameter",
    pages: query,
    tag: tag,
  });
  res.end();
});

route.post("/profile/upload", upload.single("image"), (req, res) => {
  const { name, title } = req.body;
  const image = req.file;

  if (image) {
    const __dirname = path.resolve();
    const target = path.join(__dirname, "assets", image.originalname);
    fs.renameSync(image.path, target);

    res.json({
      status: 200,
      message: "Successfully",
      data: {
        name,
        title,
        image,
      },
    });
  }
  res.end();
});

route.post("/profile/download", upload.single("image"), (req, res) => {
  const image = req.file;

  if (image) {
    const __dirname = path.resolve();
    const target = path.join(__dirname, "assets", image.originalname);
    fs.renameSync(image.path, target);
    res.sendFile(target)
  }

  res.end();
});

export default route;
