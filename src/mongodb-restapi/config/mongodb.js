import { MongoClient } from "mongodb";

const url =
  "mongodb://mongodb-restapi:dbOwner@localhost:27017?authSource=admin";
const client = new MongoClient(url);
const database = "mongodb-restapi";
const db = client.db(database);

(async () => {
  try {
    await client.connect();
    console.log("Koneksi Berhasil!");
  } catch (error) {
    console.log(error);
  }
})();

export default db;
