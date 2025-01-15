import { IsDefined } from "class-validator"

export class UpdateDto{
    @IsDefined
    title: string
    content: string
}