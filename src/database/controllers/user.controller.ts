import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UserController {
  async create(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const repository = new UserRepository();

    const user = await repository.createUser(nome, email, senha);

    return res.json(user);
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const repository = new UserRepository();
    const user = await repository.checkUserLogin(email, senha);

    if (!user) {
      return res.status(401).json({ error: "Incorrect username or password" });
    } else {
      return res.status(201).json({
        success: true,
      });
    }
  }
}
