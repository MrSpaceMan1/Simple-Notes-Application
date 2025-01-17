import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entity/Note';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    providers: [NotesService],
    controllers: [NotesController],
})export class NotesModule {}
