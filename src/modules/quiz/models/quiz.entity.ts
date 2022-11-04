import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('quiz')
export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'Unique identifier for the table'
    })
    id: number;

    @Column(
        {
            type:'varchar'
        }
    )
        title:string;

        @Column(
            {
                type:'varchar',
                default:'NA'
            }
        )
            description:string;
    


    @Column(
        {
                type:'boolean',
                default:1
        }
    )
        isActive:boolean;

    @OneToMany(()=>Question,question=>question.quiz)
        questions: Question[]
}