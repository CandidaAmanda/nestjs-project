import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuestionDto } from '../dto/question.dto';
import { QuizDto } from '../dto/quiz.dto';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService:QuizService)
    {}
/*********************/
  @Get('')

  async getAllQuiz()
  {
    return await this.quizService.getQuiz();
  }
/*********************/
  @Post('/addQuiz')
 
  @UsePipes(ValidationPipe)
  async addQuiz(@Body() quizData:QuizDto)
  {
    console.log(quizData);
       // return {'data':quizData};

       return await this.quizService.addQuiz(quizData);
  }
/*********************/

@Get('/:id')

async getQuizById(@Param('id', ParseIntPipe) id:number){

  return await this.quizService.getQuizById(id);


}

}
