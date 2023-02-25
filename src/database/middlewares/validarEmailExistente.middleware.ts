import { Request, Response, NextFunction } from "express";
import { UsuarioRepository } from "../repositories/usuario.repository";

const repository = new UsuarioRepository();

async function verificarEmailExistente(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const emailExistente = await repository.verificarEmailExistente(email);
  if (emailExistente) {
    return res.status(400).json({ error: "Email already registered" });
  }

  next();
}

export default verificarEmailExistente;
