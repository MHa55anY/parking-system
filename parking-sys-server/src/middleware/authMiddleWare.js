import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../routes/secret.js";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //Bearer TOKEN
  const token = authHeader.split(" ")?.[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    console.log("VERIFYING---", user);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
