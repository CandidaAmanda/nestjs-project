import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { QuestionDto } from '../dto/question.dto';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../models/quiz.entity';

@Injectable()
export class QuestionService {

    constructor ( 
    @InjectRepository(QuestionRepository) private questionRepository:QuestionRepository,
    ){}


    async createQuestion (question: QuestionDto, parentQuiz:Quiz){
        console.log(question)
        let newQuestion= await this.questionRepository.save({
            question:question.question});
        console.log(parentQuiz.questions)
            parentQuiz.questions.push(newQuestion);
           await parentQuiz.save();
          
            
        return newQuestion;
      
    }

    async getQuestionById(id:number): Promise<any>{

        return await this.questionRepository.findOne(id, {relations:['quiz','options']});
    }
}
