"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const notes_entity_1 = require("./entities/notes.entity");
const users_entity_1 = require("./entities/users.entity");
const config = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [users_entity_1.UserEntity, notes_entity_1.NoteEntity],
    migrations: ["src/database/migrations/**/*.ts"],
    // ssl: {
    //   rejectUnauthorized: false,
    // },
};
exports.default = config;
