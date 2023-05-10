export const log = (req, res, next) => {
  console.log(new Date().toUTCString().toString(), req.method, req.originalUrl);
  next();
};
