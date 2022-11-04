import { EntityRepository, Repository } from "typeorm";
import { Option } from "../models/option.entity";

@EntityRepository(Option)
export class OptionRepository extends Repository<Option> {
//No code here unless we want to override existing typeORM functions or add new DB action functions

}