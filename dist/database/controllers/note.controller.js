"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const note_repository_1 = require("../repositories/note.repository");
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, userId } = req.body;
            const repository = new note_repository_1.NoteRepository();
            const note = yield repository.createNote(title, description, userId);
            return res.status(200).json({
                success: true,
                data: note,
            });
        });
    }
    getUserNotes(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (_a = req.query.userId) === null || _a === void 0 ? void 0 : _a.toString();
            const repository = new note_repository_1.NoteRepository();
            const notes = yield repository.getAllUserNotes(userId);
            return res.status(200).json({
                success: true,
                data: notes,
            });
        });
    }
    updateNote(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = (_a = req.params.noteId) === null || _a === void 0 ? void 0 : _a.toString();
            const { noteTitle, noteDescription } = req.body;
            const repository = new note_repository_1.NoteRepository();
            const note = yield repository.updateUserNote(noteId, noteTitle, noteDescription);
            res.status(200).json({
                success: true,
                data: note,
            });
        });
    }
    deleteNote(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = (_a = req.params.noteId) === null || _a === void 0 ? void 0 : _a.toString();
            const repository = new note_repository_1.NoteRepository();
            yield repository.deleteUserNote(noteId);
            res.status(200).json({
                success: true,
                message: "Note deleted successfully!",
            });
        });
    }
    archiveNote(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = (_a = req.params.noteId) === null || _a === void 0 ? void 0 : _a.toString();
            const userId = (_b = req.params.userId) === null || _b === void 0 ? void 0 : _b.toString();
            const repository = new note_repository_1.NoteRepository();
            yield repository.archiveUserNote(noteId);
            const notes = yield repository.getAllUserNotes(userId);
            res.status(200).json({
                success: true,
                message: "Note archived successfully!",
                data: notes,
            });
        });
    }
    unarchiveNote(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = (_a = req.params.noteId) === null || _a === void 0 ? void 0 : _a.toString();
            const userId = (_b = req.params.userId) === null || _b === void 0 ? void 0 : _b.toString();
            const repository = new note_repository_1.NoteRepository();
            yield repository.unarchiveUserNote(noteId);
            const notes = yield repository.getAllUserNotes(userId);
            res.status(200).json({
                success: true,
                message: "Note archived successfully!",
                data: notes,
            });
        });
    }
    searchNote(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (_a = req.params.userId) === null || _a === void 0 ? void 0 : _a.toString();
            const { query } = req.query;
            const repository = new note_repository_1.NoteRepository();
            const searchResults = yield repository.searchUserNotes(userId, query);
            if (searchResults.length === 0) {
                const notes = yield repository.getAllUserNotes(userId);
                return res.status(201).json({
                    success: true,
                    data: notes,
                });
            }
            else {
                return res.status(200).json({
                    success: true,
                    data: searchResults,
                });
            }
        });
    }
}
exports.NoteController = NoteController;
