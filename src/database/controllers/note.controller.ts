import { Request, Response } from "express";
import { NoteRepository } from "../repositories/note.repository";

export class NoteController {
  async create(req: Request, res: Response) {
    const { title, description, userId } = req.body;

    const repository = new NoteRepository();

    const note = await repository.createNote(title, description, userId);

    return res.status(200).json({
      success: true,
      data: note,
    });
  }

  async getUserNotes(req: Request, res: Response) {
    const userId = req.query.userId?.toString();

    const repository = new NoteRepository();

    const notes = await repository.getAllUserNotes(userId!);

    return res.status(200).json({
      success: true,
      data: notes,
    });
  }

  async updateNote(req: Request, res: Response) {
    const noteId = req.params.noteId?.toString();
    const { noteTitle, noteDescription } = req.body;

    const repository = new NoteRepository();

    const note = await repository.updateUserNote(
      noteId,
      noteTitle,
      noteDescription
    );

    res.status(200).json({
      success: true,
      data: note,
    });
  }

  async deleteNote(req: Request, res: Response) {
    const noteId = req.params.noteId?.toString();

    const repository = new NoteRepository();

    await repository.deleteUserNote(noteId);

    res.status(200).json({
      success: true,
      message: "Note deleted successfully!",
    });
  }

  async archiveNote(req: Request, res: Response) {
    const noteId = req.params.noteId?.toString();
    const userId = req.params.userId?.toString();

    const repository = new NoteRepository();

    await repository.archiveUserNote(noteId);

    const notes = await repository.getAllUserNotes(userId!);

    res.status(200).json({
      success: true,
      message: "Note archived successfully!",
      data: notes,
    });
  }

  async unarchiveNote(req: Request, res: Response) {
    const noteId = req.params.noteId?.toString();
    const userId = req.params.userId?.toString();

    const repository = new NoteRepository();

    await repository.unarchiveUserNote(noteId);

    const notes = await repository.getAllUserNotes(userId!);

    res.status(200).json({
      success: true,
      message: "Note archived successfully!",
      data: notes,
    });
  }

  async searchNote(req: Request, res: Response) {
    const userId = req.params.userId?.toString();
    const { query } = req.query;

    const repository = new NoteRepository();

    const searchResults = await repository.searchUserNotes(
      userId,
      query as string
    );

    if (searchResults.length === 0) {
      const notes = await repository.getAllUserNotes(userId!);
      return res.status(201).json({
        success: true,
        data: notes,
      });
    } else {
      return res.status(200).json({
        success: true,
        data: searchResults,
      });
    }
  }
}
