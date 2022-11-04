
import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions={

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'quizworld',
    entities: [__dirname+'/../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
}