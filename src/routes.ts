import { Express } from "express";
import { UserController } from "./database/controllers/user.controller";
import checkUserFields from "./database/middlewares/checkUserFields.middleware";
import checkExistingEmail from "./database/middlewares/checkExistingEmail.middleware";
import checkPasswords from "./database/middlewares/checkPasswords.middleware";
import { NoteController } from "./database/controllers/note.controller";
import checkExistingId from "./database/middlewares/checkExistingId.middleware";
import checkExistingIdWithQuery from "./database/middlewares/checkExistingIdWithQuery.middleware";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  const userController = new UserController();
  app.post(
    "/users",
    checkUserFields,
    checkExistingEmail,
    checkPasswords,
    userController.create
  );
  app.post("/users/login", userController.login);

  const noteController = new NoteController();
  app.post("/users/notes", checkExistingId, noteController.create);
  app.get(
    "/users/notes",
    checkExistingIdWithQuery,
    noteController.getUserNotes
  );
  app.put("/users/notes/:noteId", noteController.updateNote);
};
