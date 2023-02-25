import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import { UserEntity } from "./entities/users.entity";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [UserEntity],
  migrations: ["src/database/migrations/**/*.ts"],
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
