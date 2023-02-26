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
}
