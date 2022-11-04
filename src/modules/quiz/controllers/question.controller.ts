import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionDto } from "../dto/question.dto";
import { Question } from "../models/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";

@Controller('question')

export class QuestionController {
    constructor(private quizService:QuizService, private questionService: QuestionService){}
    @Post('/addQuestion')

@UsePipes(ValidationPipe)

async addQuestion(@Body() questionData:QuestionDto):Promise<Question>
  {
    console.log(questionData);
       // return {'data':quizData};
      let quizData= await this.quizService.getQuizById(questionData.quizId);
      return await this.questionService.createQuestion(questionData,quizData)
       //return await this.questionService.addQuestion(questionData, quizData);
  }

  @Get('/:id')

async getQuizById(@Param('id', ParseIntPipe) id:number){

  return await this.questionService.getQuestionById(id);


}

}