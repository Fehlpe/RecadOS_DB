import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const repository = new UserRepository();

    const user = await repository.createUser(username, email, password);

    return res.json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const repository = new UserRepository();
    const user = await repository.checkUserLogin(email, password);

    if (!user) {
      return res.status(401).json({ error: "Incorrect email or password" });
    } else {
      return res.status(201).json({
        success: true,
      });
    }
  }
}
