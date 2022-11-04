import { IsNotEmpty, Length } from "class-validator";


export class OptionDto {
    @IsNotEmpty({message:'Option Value is missing'})
    @Length(3,255)
    text:string;

    @IsNotEmpty({message:"Indicator missing"})
    isCorrect: boolean;

    @IsNotEmpty({message:"Question ID missing"})
    questionId: number;
}