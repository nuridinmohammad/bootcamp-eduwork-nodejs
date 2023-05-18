import connection from "../../config/mysql.js";

export const getAllProduct = (req, res) => {
  const { search } = req.query;
  let exec = {};
  if (search) {
    exec = {
      sql: "SELECT * FROM products WHERE name LIKE ?",
      values: [`%${search}%`],
    };
  } else {
    exec = {
      sql: "SELECT * FROM products",
    };
  }
  connection.query(exec, _response(res));
};

export const getProductById = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM products WHERE id = ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

export const postProduct = (req, res) => {
  const { name, price } = req.body;
  connection.query(
    {
      sql: "INSERT INTO products (name, price) VALUES (?, ?)",
      values: [name, price],
    },
    _response(res)
  );
};

export const updateProductById = (req, res) => {
  const { name, price } = req.body;
  connection.query(
    {
      sql: "UPDATE products SET name = ?, price = ? WHERE id = ?",
      values: [name, price, req.params.id],
    },
    _response(res)
  );
};

export const deleteProductById = (req, res) => {
  connection.query(
    {
      sql: "DELETE FROM products WHERE id = ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

const _response = (res) => {
  return (error, results) => {
    if (error) {
      res.json({
        status: "Failed!",
        message: "Failed to fetch data to database" + error,
      });
    } else {
      res.json({
        status: "Success",
        message: "Succesfully fetch data to database",
        result: results,
      });
    }
  };
};
