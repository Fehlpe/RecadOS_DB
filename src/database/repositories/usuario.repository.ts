import { UsuarioEntity } from "../entities/usuario.entity";
import { pgHelper } from "../pg-helper";

export class UsuarioRepository {
  async criarUsuario(
    usuarioNome: string,
    usuarioEmail: string,
    usuarioSenha: string
  ): Promise<UsuarioEntity> {
    const manager = pgHelper.client.manager;

    const novoUsuario = manager.create(UsuarioEntity, {
      usuarioNome,
      usuarioEmail,
      usuarioSenha,
    });

    return await manager.save(novoUsuario);
  }

  async verificarEmailExistente(usuarioEmail: string): Promise<boolean> {
    const manager = pgHelper.client.manager;
    const usuario = await manager.findOne(UsuarioEntity, {
      where: { usuarioEmail },
    });
    return !!usuario;
  }

  async getAll(): Promise<UsuarioEntity[]> {
    const manager = pgHelper.client.manager;

    const usuarios = await manager.find(UsuarioEntity, {
      order: {
        usuarioNome: "ASC",
        usuarioDataCriacao: "DESC",
      },
    });

    return usuarios;
  }
}
