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
}
