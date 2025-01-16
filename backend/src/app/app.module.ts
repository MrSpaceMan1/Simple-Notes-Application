import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entity/Note';
import { NotesModule } from 'src/notes/notes.module';

@Module({
  imports: [NotesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'notes',
    synchronize: true,
    logging: true,
    entities: [Note],
    subscribers: [],
    migrations: [],
  })],
  controllers: [AppController],
})
export class AppModule {}
