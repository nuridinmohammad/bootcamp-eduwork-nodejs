import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Products = sequelize.define("Products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Products
