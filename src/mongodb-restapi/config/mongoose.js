import mongoose from "mongoose";

const uriDb ="mongodb://127.0.0.1:27017/mongodb-restapi"
mongoose.connect(uriDb);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.info("Successfully Connection to Database"));

export default db