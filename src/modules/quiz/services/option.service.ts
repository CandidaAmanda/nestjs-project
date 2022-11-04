import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionDto } from "../dto/option.dto";
import { QuestionDto } from "../dto/question.dto";
import { Question } from "../models/question.entity";
import { OptionRepository } from "../repositories/option.repository";

@Injectable()
export class OptionService {

    constructor(@InjectRepository(OptionRepository) private optionRepository : OptionRepository) 
    {}


    async createOption (requestOption: OptionDto, relatedQuestion: Question)
    {
       // console.log(requestOption)
        const newOption= await this.optionRepository.save(
            {
                optionValue: requestOption.text,
                isCorrect: requestOption.isCorrect
            }
        );

      
          relatedQuestion.options.push(newOption); 
        await relatedQuestion.save();

        return newOption;
    }
}