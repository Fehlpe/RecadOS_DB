import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/user.repository";

const repository = new UserRepository();

async function checkExistingEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const exist = await repository.checkExistingEmail(email);
  if (exist) {
    return res.status(400).json({ error: "Email already registered" });
  }

  next();
}

export default checkExistingEmail;
