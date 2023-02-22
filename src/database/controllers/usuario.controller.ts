import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class UsuarioController {
  async criar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const repository = new UsuarioRepository();

    const usuario = await repository.criarUsuario(nome, email, senha);

    return res.json(usuario);
  }
}
