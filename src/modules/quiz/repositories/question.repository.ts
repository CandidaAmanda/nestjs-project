import { EntityRepository, Repository } from "typeorm";
import { Question } from "../models/question.entity";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {


}