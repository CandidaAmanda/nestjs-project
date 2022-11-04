import { IsNotEmpty, Length } from "class-validator";

export class QuestionDto {

    @IsNotEmpty({message:'Question is missing'})
    @Length(3,255)
    question:string;

    @IsNotEmpty({message:"Quiz ID missing"})
    quizId:number;
    
}