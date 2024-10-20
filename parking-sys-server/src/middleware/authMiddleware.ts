import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../routesNew/secret";
import type { RequestHandler, Request } from "express";
import type { JwtPayload, VerifyCallback } from "jsonwebtoken";
import type { TUser } from "../modelsNew/UserModel";

interface AuthenticatedRequest extends Request {
  user?: TUser;
}

export const authenticateToken: RequestHandler = (
  req: AuthenticatedRequest,
  res,
  next
): void => {
  const {
    headers: { authorization },
  } = req;
  //Bearer TOKEN
  const token = authorization?.split(" ")?.[1];
  if (token == null) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, ((err, user) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    req.user = user as TUser;
    next();
  }) as VerifyCallback<JwtPayload | string>);
};
