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
}
