import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: "recado" })
export class RecadoEntity extends BaseEntity {
  @PrimaryColumn({ name: "recado_id" })
  recadoId!: string;

  @Column({ name: "titulo" })
  recadoTitulo!: string;

  @Column({ name: "descricao" })
  recadoDescricao!: string;

  @ManyToOne(() => UsuarioEntity)
  @JoinColumn({ name: "usuario_id" })
  usuarioId!: UsuarioEntity;

  @CreateDateColumn({ name: "data_criacao" })
  recadoDataCriacao!: Date;

  @UpdateDateColumn({ name: "data_atualizacao" })
  recadoDataAtualizacao?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.recadoId = new Date().getTime().toString();
    this.recadoDataCriacao = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.recadoDataAtualizacao = new Date();
  }
}
