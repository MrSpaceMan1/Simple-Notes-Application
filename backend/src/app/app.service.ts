import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppDataSource } from 'src/data-source';
import { Note } from 'src/entity/Note';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AppService {
  noteRepository: Repository<Note>;

  constructor(@InjectRepository(Note) noteRepository: Repository<Note>) {
    this.noteRepository = noteRepository;
  }

  getAllNotes(): Promise<Array<Note>> {
    return this.noteRepository.find();
  }

  async getNote(id: number): Promise<Note> {
    const user = await this.noteRepository.findOneBy({ id });
    if (!user) throw new NotFoundException();
    return user;
  }

  async updateNote(update: UpdateDto): Promise<UpdateResult> {
    const exists = await this.noteRepository.exists({
      where: { id: update.id },
    });
    if (!exists) throw new NotFoundException(`Note with id ${update} doesn't exist`);
    return this.noteRepository.update({ id: update.id }, update);
  }
}
