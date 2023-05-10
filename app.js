import express from "express";
import path from "path"
import cors from 'cors'
import compression from "compression";
import router from "./src/expressjs/routes/routes.js";
import notFound from "./src/expressjs/utils/notFound.js";
import { log } from "./src/expressjs/middleware/logger.js";

const app = express();
const port = 3001;
const __dirname = path.resolve()

app.use(log);
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(compression())
app.use("/public",express.static(path.join(__dirname, 'assets')))
app.use(router);
app.use(notFound);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
