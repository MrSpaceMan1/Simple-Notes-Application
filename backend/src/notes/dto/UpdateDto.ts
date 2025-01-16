import { IsDefined, IsInt, IsString } from "class-validator"

export class UpdateDto{
    @IsDefined({message: (v) => `${v.property} cannot be empty`})
    @IsString(({message: (v) => `${v.property} has to be text`}))
    title: string
    @IsDefined({message: (v) => `${v.property} cannot be empty`})
    @IsString(({message: (v) => `${v.property} has to be text`}))
    content: string
}