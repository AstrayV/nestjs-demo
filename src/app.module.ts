import { Module } from '@nestjs/common';


import { User_Module} from './modules/user/user.module'

import { TypeOrmModule } from '@nestjs/typeorm';

const db_connect = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nong',
  password: '123456',
  database: 'nest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
})



@Module({
  imports: [User_Module, db_connect],
  controllers: [],
  providers: [],
})
export class AppModule {}
