const {privatkey } =require('./config');
const jwt = require('jsonwebtoken');
exports.auth = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, privatkey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
