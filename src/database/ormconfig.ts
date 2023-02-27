import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import { NoteEntity } from "./entities/notes.entity";
import { UserEntity } from "./entities/users.entity";
import { CreateTable1677461157917 } from "./migrations/1677461157917-CreateTable";
import { CreateTable1677461983069 } from "./migrations/1677461983069-CreateTable";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [UserEntity, NoteEntity],
  migrations: [CreateTable1677461157917, CreateTable1677461983069],
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
