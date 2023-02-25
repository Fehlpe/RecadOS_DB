import { Express } from "express";
import { UsuarioController } from "./database/controllers/usuario.controller";
import validarCamposUsuario from "./database/middlewares/validarCamposUsuario.middleware";
import verificarEmailExistente from "./database/middlewares/validarEmailExistente.middleware";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const usuarioController = new UsuarioController();
  app.post(
    "/usuario",
    verificarEmailExistente,
    validarCamposUsuario,
    usuarioController.criar
  );
  app.get("/usuario", usuarioController.pegarTodos);
};
