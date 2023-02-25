import { Express } from "express";
import { UserController } from "./database/controllers/user.controller";
import checkUserFields from "./database/middlewares/checkUserFields.middleware";
import checkExistingEmail from "./database/middlewares/checkExistingEmail.middleware";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const userController = new UserController();
  app.post(
    "/users",
    checkExistingEmail,
    checkUserFields,
    userController.create
  );
  app.post("/users/login", userController.login);
};
