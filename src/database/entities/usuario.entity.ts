import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "usuario" })
export class UsuarioEntity extends BaseEntity {
  @PrimaryColumn({ name: "usuario_id" })
  usuarioId!: string;

  @Column({ name: "senha" })
  usuarioSenha!: string;

  @Column({ name: "email" })
  usuarioEmail!: number;

  @Column({ name: "nome" })
  usuarioNome!: number;

  @CreateDateColumn({ name: "data_criacao" })
  usuarioDataCriacao!: Date;

  @UpdateDateColumn({ name: "data_atualizacao" })
  usuarioDataAtualizacao?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.usuarioId = new Date().getTime().toString();
    this.usuarioDataCriacao = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.usuarioDataAtualizacao = new Date();
  }
}
