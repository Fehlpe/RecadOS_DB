import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import { UsuarioEntity } from "./entities/usuario.entity";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [UsuarioEntity],
  migrations: ["src/database/migrations/**/*.ts"],
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
