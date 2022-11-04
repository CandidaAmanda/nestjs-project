import { IsNotEmpty, Length } from "class-validator";

export class QuizDto {

    @IsNotEmpty({message:'Quiz name is missing'})
    @Length(3,255)
    title:string;
    @IsNotEmpty({message:'Quiz description is missing'})
    @Length(10)
    description: string;
}