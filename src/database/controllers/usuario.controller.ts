import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class UsuarioController {
  async criar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const repository = new UsuarioRepository();

    const emailExistente = await repository.verificarEmailExistente(email);
    if (emailExistente) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    const usuario = await repository.criarUsuario(nome, email, senha);

    return res.json(usuario);
  }

  async pegarTodos(req: Request, res: Response) {
    const repository = new UsuarioRepository();

    try {
      const usuarios = await repository.getAll();
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
