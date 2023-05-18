import Products from "./model.js";
import { Sequelize } from "sequelize";

export const getAllProduct = async (req, res) => {
  const Op = Sequelize.Op;
  const { search } = req.query;
  let exec = "";

  if (search) {
    exec = await Products.findAll({
      where: {
        name: {
          [Op.like]: `%${search}%`,
        },
      },
    });
  } else {
    exec = await Products.findAll();
  }

  try {
    await Products.sync();
    const result = exec;
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const getProductById = async (req, res) => {
  const Op = Sequelize.Op;
  const { id } = req.params;

  try {
    await Products.sync();
    const result = await Products.findOne({
      where: {
        id: id,
      },
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const postProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    await Products.sync();
    const result = await Products.create({ name, price });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const updateProductById = async (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;
  try {
    await Products.sync();
    const result = await Products.update(
      { name, price },
      {
        where: {
          id,
        },
      }
    );
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const destroyProductById = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.sync();
    await Products.destroy({ where: { id: id } });
    res.send({
      response: "Successfully Delete by "+ id,
    });
  } catch (error) {
    res.send({
      response: error,
    });
  }
};
