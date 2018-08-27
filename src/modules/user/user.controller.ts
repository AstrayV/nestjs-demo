import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Param,
  Res,
  HttpStatus,
  Body,
  HttpException,
  Headers,
  UseGuards,
  UsePipes
} from '@nestjs/common';

import { User_Service } from './user.service';

import { AuthService } from '../auth/auth.service';

import { Sign_Up_Dto, Login_Dto } from './dto/signUp.dto';

import { AuthGuard } from '../auth/auth.guard';

import { Login_Pipe } from './validation.pipe';

@Controller()
export class User_Controller {
  constructor(
    private readonly user_Service: User_Service,
    private readonly authService: AuthService,
  ) {}
  @Post('/signup')
  @UsePipes(new Login_Pipe())
  @HttpCode(204)
  async create(@Body() sign_info: Sign_Up_Dto, @Req() request, @Res() res) {
    const result = await this.user_Service.create(sign_info);
    if (result) {
      res.status(HttpStatus.CREATED).json();
    } else {
      throw new HttpException(
        {
          error: 'error',
        },
        400,
      );
    }
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() login_info: Login_Dto, @Res() res) {
    const token = await this.user_Service.login(login_info);
    res.json(token);
  }

  @Get('/user')
  @UseGuards(AuthGuard)
  async findAll(@Res() res, @Headers() headers) {
    const users = await this.user_Service.findAll();
    res.json(users);
  }
}
