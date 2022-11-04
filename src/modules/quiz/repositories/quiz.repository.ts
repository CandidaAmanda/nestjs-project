import { EntityRepository, Repository } from "typeorm";
import { Quiz } from "../models/quiz.entity";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {


}