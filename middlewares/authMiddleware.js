const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const access_token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(access_token, process.env.JWT_SECRET || "yoursecret");
    req.user = decoded; // You can store user info here
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
