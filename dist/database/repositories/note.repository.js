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
exports.NoteRepository = void 0;
const typeorm_1 = require("typeorm");
const notes_entity_1 = require("../entities/notes.entity");
const pg_helper_1 = require("../pg-helper");
class NoteRepository {
    createNote(noteTitle, noteDescription, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const newNote = manager.create(notes_entity_1.NoteEntity, {
                noteTitle,
                noteDescription,
                userId,
            });
            return yield manager.save(newNote);
        });
    }
    getAllUserNotes(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            return yield manager.find(notes_entity_1.NoteEntity, { where: { userId } });
        });
    }
    updateUserNote(noteId, noteTitle, noteDescription) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const note = yield manager.findOne(notes_entity_1.NoteEntity, { where: { noteId } });
            if (!note) {
                return undefined;
            }
            note.noteTitle = noteTitle;
            note.noteDescription = noteDescription;
            return yield manager.save(note);
        });
    }
    deleteUserNote(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            yield manager.delete(notes_entity_1.NoteEntity, {
                noteId,
            });
        });
    }
    archiveUserNote(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const note = yield manager.findOne(notes_entity_1.NoteEntity, { where: { noteId } });
            if (!note) {
                return undefined;
            }
            note.noteArchived = true;
            yield manager.save(note);
        });
    }
    unarchiveUserNote(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const note = yield manager.findOne(notes_entity_1.NoteEntity, { where: { noteId } });
            if (!note) {
                return undefined;
            }
            note.noteArchived = false;
            yield manager.save(note);
        });
    }
    searchUserNotes(userId, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const where = query
                ? { userId, noteTitle: (0, typeorm_1.ILike)(`%${query}%`) }
                : { userId };
            return yield manager.find(notes_entity_1.NoteEntity, { where });
        });
    }
}
exports.NoteRepository = NoteRepository;
