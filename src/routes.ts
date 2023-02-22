import { Express } from "express";
import { UsuarioController } from "./database/controllers/usuario.controller";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const usuarioController = new UsuarioController();
  app.post("/usuario", usuarioController.criar);
};
