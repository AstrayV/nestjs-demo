
import { ApiModelProperty } from '@nestjs/swagger';


export class Sign_Up_Dto {
  @ApiModelProperty({type: String})
  readonly username: string;
  @ApiModelProperty({type: String})
  readonly password: string;
  @ApiModelProperty({type: String})
  readonly nickname: string;
}




export class Login_Dto{
  @ApiModelProperty({type: String})
  readonly username: string;
  @ApiModelProperty({type: String})
  readonly password: string;
}