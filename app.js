import express from "express";
import path from "path";
import cors from "cors";
/* import compression from "compression";
import routerProduct from "./src/mysql-restapi/app/product/routes.js";
import routerProductV2 from "./src/mysql-restapi/app/product-v2/routes.js"; */
// import routerProductV3 from './src/mongodb-restapi/app/product/routes.js'
import db from './src/mongodb-restapi/config/mongoose.js'
import routerProductV4 from "./src/mongodb-restapi/app/users/routes.js";
import notFound from "./src/expressjs/utils/notFound.js";
import { log } from "./src/expressjs/middleware/logger.js";

db
const app = express();
const port = 3001;
const __dirname = path.resolve();

app.use(log);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(compression())
app.use("/public/", express.static(path.join(__dirname, "assets")));
/* app.use('/api/v1',routerProduct);
app.use('/api/v2',routerProductV2); */
// app.use("/api/v3", routerProductV3)
app.use("/api/v4", routerProductV4);
app.use(notFound);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
