"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./database/controllers/user.controller");
const checkUserFields_middleware_1 = __importDefault(require("./database/middlewares/checkUserFields.middleware"));
const checkExistingEmail_middleware_1 = __importDefault(require("./database/middlewares/checkExistingEmail.middleware"));
const checkPasswords_middleware_1 = __importDefault(require("./database/middlewares/checkPasswords.middleware"));
const note_controller_1 = require("./database/controllers/note.controller");
const checkExistingId_middleware_1 = __importDefault(require("./database/middlewares/checkExistingId.middleware"));
const checkExistingIdWithQuery_middleware_1 = __importDefault(require("./database/middlewares/checkExistingIdWithQuery.middleware"));
exports.default = (app) => {
    app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));
    const userController = new user_controller_1.UserController();
    app.post("/users", checkUserFields_middleware_1.default, checkExistingEmail_middleware_1.default, checkPasswords_middleware_1.default, userController.create);
    app.post("/users/login", userController.login);
    const noteController = new note_controller_1.NoteController();
    app.post("/users/notes", checkExistingId_middleware_1.default, noteController.create);
    app.get("/users/notes", checkExistingIdWithQuery_middleware_1.default, noteController.getUserNotes);
    app.put("/users/notes/:noteId", noteController.updateNote);
    app.delete("/users/notes/:noteId", noteController.deleteNote);
    app.put("/:userId/notes/:noteId/archive", noteController.archiveNote);
    app.put("/:userId/notes/:noteId/unarchive", noteController.unarchiveNote);
    app.get("/:userId/notes/search", noteController.searchNote);
};
