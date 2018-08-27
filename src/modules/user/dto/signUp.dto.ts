
import { ApiModelProperty } from '@nestjs/swagger';


import {MinLength , MaxLength , Length} from 'class-validator'




export class Login_Dto{


  @ApiModelProperty({type: String})
  @MinLength(6,{
    message: 'username is to short'
  })
  @MaxLength(20,{
    message: 'username is too long'
  })
  readonly username: string;

  @ApiModelProperty({type: String})
  @Length(6,20)
  readonly password: string;
}

export class Sign_Up_Dto extends Login_Dto{

  @ApiModelProperty({type: String})
  readonly nickname: string;
}