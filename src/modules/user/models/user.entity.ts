import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import {ApiProperty} from '@nestjs/swagger'

@Entity('user')
export class User extends BaseEntity {

    @ApiProperty({
        description: 'Unique ID',
        example: '1'
    })
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({
        description: 'Username',
        example: 'Candida Rodrigues'
    })
    @Column(
        {
            type:'varchar'
        }
    )
    name: string;
    @ApiProperty({
        description: 'Email ID',
        example: 'candida2295@gmail.com'
    })
    @Column(
        {
            type:'varchar',
            unique:true
        }
    )

    email: string;

    @ApiProperty({
        description: 'Password',
        example: 'Alphanumeric and special character password'
    })
    @Column(
        {
            type:'varchar'
        }
    )

    password: string;

    @CreateDateColumn()

    createdAt: Date

    @UpdateDateColumn()

    updatedAt: Date

    @BeforeInsert()

    async setPassword(password: string)
    {
        const salt = await bcrypt.genSalt();
        this.password=  await bcrypt.hash(password||this.password,salt);
    }
}