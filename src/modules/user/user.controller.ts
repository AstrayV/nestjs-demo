import { Controller, Get, Req , Post , HttpCode , Param , Res , HttpStatus,Body , HttpException, Headers , UseGuards} from '@nestjs/common';

import { User_Service} from './user.service'

import {AuthService } from '../auth/auth.service'

import {Sign_Up_Dto , Login_Dto} from './dto/signUp.dto'



import {AuthGuard} from '../auth/auth.guard';


@Controller()
export class User_Controller {
  constructor(
    private readonly user_Service:User_Service,
    private readonly authService: AuthService
  ){

  }

  @HttpCode(204)
  @Post('/signup')
  async create(@Body() sign_info:Sign_Up_Dto, @Req() request, @Res() res){
    // console.log(request.headers)
    // const has_user = await this.user_Service.find_user_by_name(sign_info.username);

    // if(has_user){
    //   throw new HttpException({
    //     error: 'has already sign up',
    //   },400)
    // }else{
    //   const result = await this.user_Service.create(sign_info);
    //   console.log(result);
    //   if(result){
    //     // res.HttpCode(200);
    //     res.status(HttpStatus.CREATED).json();
    //   }else{
    //     throw new HttpException({
    //       error: 'error',
    //     },400)
    //     // res.HttpCode(400);
    //   }
    // }
    // return this.user_Service.create(sign_info);
    const result = await this.user_Service.create(sign_info);
    if(result){
      res.status(HttpStatus.CREATED).json();
    }else{
      throw new HttpException({
        error: 'error',
      },400)
    }
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() login_info: Login_Dto,@Res() res){
    const token =  await this.user_Service.login(login_info);
    res.json(token);
  }


  @Get('user')
  @UseGuards(AuthGuard)
  async findAll(@Res() res, @Headers() headers){
    const users = await this.user_Service.findAll();
    res.json(users);
  }
}
