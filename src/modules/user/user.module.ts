import { Module } from '@nestjs/common';
import { User_Controller } from './user.controller';
import {User_Service} from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Entity} from './user.entity'

import { AuthService} from '../auth/auth.service'



// import { AuthGuard} from '../auth/auth.guard'

@Module({
  imports:[ TypeOrmModule.forFeature([User_Entity])],
  controllers: [User_Controller],
  providers: [User_Service , AuthService],
})
export class User_Module {

};