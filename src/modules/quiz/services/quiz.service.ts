import { Injectable } from '@nestjs/common';
import { QuizRepository } from '../repositories/quiz.repository';
import {InjectRepository} from '@nestjs/typeorm';
import { QuizDto } from '../dto/quiz.dto';
import { Quiz } from '../models/quiz.entity';

@Injectable()
export class QuizService {

    constructor (@InjectRepository(QuizRepository) private quizRepository:QuizRepository){}

    async getQuiz(): Promise<Quiz[]>{

       return await this.quizRepository.createQueryBuilder('qui').leftJoinAndSelect('qui.questions','qt')
        .leftJoinAndSelect('qt.options','o').getMany();
        //return await this.quizRepository.createQueryBuilder('qui').getMany();
    }


    async getQuizById(id:number): Promise<any>{

        return await this.quizRepository.findOne(id, {relations:['questions','questions.options']});
    }


    async addQuiz (quiz:QuizDto){

        return await this.quizRepository.save(quiz);
    }

   
}
