import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionDto } from "../dto/option.dto";
import { Question } from "../models/question.entity";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('question/option')
export class OptionController {
    constructor(private optionService: OptionService, private questionService:QuestionService)
    {}


    @Post('/addOption')
    @UsePipes(ValidationPipe)
    async saveOptionForQuestion(@Body() requestOption: OptionDto)
    {
       
        let relatedQuestion:Question = await this.questionService.getQuestionById(requestOption.questionId);
        return await this.optionService.createOption(requestOption,relatedQuestion);
        

    }
}