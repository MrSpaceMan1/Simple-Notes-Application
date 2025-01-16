import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/entity/Note';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateDto } from './dto/UpdateDto';
import { AddDto } from './dto/AddDto';

@Injectable()
export class NotesService {
    private noteRepository: Repository<Note>;

  constructor(@InjectRepository(Note) noteRepository: Repository<Note>) {
    this.noteRepository = noteRepository
  }

  getAllNotes(): Promise<Array<Note>> {
    return this.noteRepository.find();
  }

  async getNote(noteId: number): Promise<Note> {
    const user = await this.noteRepository.findOneBy({ id: noteId });
    if (!user) throw new NotFoundException(`Note with id ${noteId} doesn't exist`);
    return user;
  }

  async updateNote(noteId: number, updateDto: UpdateDto): Promise<UpdateResult> {
    const exists = await this.noteRepository.exists({
      where: { id: noteId },
    });
    if (!exists) throw new NotFoundException(`Note with id ${noteId} doesn't exist`);
    return this.noteRepository.update({ id: noteId }, updateDto);
  }

  async addNote(addDto: AddDto): Promise<Note> {
    const note = this.assign(new Note(), addDto)
    console.log(note);
    return this.noteRepository.save(note)
  }

  async deleteNote(noteId: number): Promise<DeleteResult>{
    const exists = await this.noteRepository.exists({
      where: { id: noteId },
    });
    if (!exists) throw new NotFoundException(`Note with id ${noteId} doesn't exist`);
    return this.noteRepository.delete(noteId)
  }

  private assign<T extends object>(origin: T, source: Partial<T>): T {
    let sourceKeys = Object.getOwnPropertyNames(source)
    for(const key of sourceKeys){
        Object.defineProperty(origin, key, Object.getOwnPropertyDescriptor(source, key)!)
    }
    return origin
  }
}
