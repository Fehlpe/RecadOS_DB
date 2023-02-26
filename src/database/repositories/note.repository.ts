import { NoteEntity } from "../entities/notes.entity";
import { pgHelper } from "../pg-helper";

export class NoteRepository {
  async createNote(
    noteTitle: string,
    noteDescription: string,
    userId: string
  ): Promise<NoteEntity> {
    const manager = pgHelper.client.manager;

    const newNote = manager.create(NoteEntity, {
      noteTitle,
      noteDescription,
      userId,
    });

    return await manager.save(newNote);
  }

  async getAllUserNotes(userId: string): Promise<NoteEntity[]> {
    const manager = pgHelper.client.manager;
    return await manager.find(NoteEntity, { where: { userId } });
  }

  async updateUserNote(
    noteId: string,
    noteTitle: string,
    noteDescription: string
  ): Promise<NoteEntity | undefined> {
    const manager = pgHelper.client.manager;

    const note = await manager.findOne(NoteEntity, { where: { noteId } });

    if (!note) {
      return undefined;
    }

    note.noteTitle = noteTitle;
    note.noteDescription = noteDescription;

    return await manager.save(note);
  }
}
