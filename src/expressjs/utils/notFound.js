const notFound = (req, res) => {
  res.json({
    status: 400,
    message: "URL Not Found!",
    resource: req.originalUrl
  });
  res.end();
};

export default notFound