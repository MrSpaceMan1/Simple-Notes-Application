import { IsDefined, IsString } from "class-validator"

export class AddDto{
    @IsDefined({message: "Title cannot be empty"})
    @IsString({message: "Title has to be text"})
    title: string
    @IsDefined({message: "Content cannot be empty"})
    @IsString({message: "Content has to be text"})
    content: string
}