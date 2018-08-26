
import { Injectable , HttpException , Inject} from '@nestjs/common';

import { sign_up_info , login_interface} from './interface/user.interface';
// import { Sign_Up_Dto} from './dto/signUp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { md5 } from '../../common/md5';

import { Repository } from 'typeorm';
import { User_Entity} from './user.entity';
import {AuthService } from '../auth/auth.service'

@Injectable()
export class User_Service {
  constructor(
    @InjectRepository(User_Entity)
    private readonly userRepository: Repository<User_Entity>,
    @Inject('AuthService')
    private readonly authService: AuthService
  ){

  }

  async create(user: sign_up_info) {
    const data = {
      username: user.username,
      password: md5(user.password),
      nickname: user.nickname,
    };
    const has_sign_up = await this.userRepository.findOne({username: data.username});
    if(has_sign_up){
      throw new HttpException({
        error: 'exist user'
      },400)
    }else{
      const result = await this.userRepository.insert(data);
      return result
    }
  }

  async login(login_info: login_interface): Promise<any>{
    const user:any = await this.userRepository.findOne({username: login_info.username});
    if(user && user.username === login_info.username && md5(login_info.password) === user.password){
      const token = await this.authService.createToken(user.id);
      return token;
    }else{
      throw new HttpException({
        error: 'password error'
      },400)
    }
  }


  async findAll(){
    const users = await this.userRepository.find();
    return users
  }
}
