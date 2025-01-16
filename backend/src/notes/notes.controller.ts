import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { NotesService } from './notes.service';
import { AddDto } from './dto/AddDto';
import { UpdateDto } from './dto/UpdateDto';
import { BaseExceptionFilter } from '@nestjs/core';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService){}
    @Get()
    async getNotes(){
        return await this.notesService.getAllNotes()
    }

    @Get("/:id")
    async getNote(@Param("id", new ParseIntPipe()) id: number){
        return await this.notesService.getNote(id)
    }

    @Post()
    async addNote(@Body() addDto: AddDto){
        return this.notesService.addNote(addDto)
    }

    @Put("/:id")
    async updateNote(@Param("id", new ParseIntPipe()) id: number, @Body() updateDto: UpdateDto){
        await this.notesService.updateNote(id, updateDto)
    }

    @Delete("/:id")
    async deleteNote(@Param("id", new ParseIntPipe()) id: number){
        await this.notesService.deleteNote(id);
    }
}
