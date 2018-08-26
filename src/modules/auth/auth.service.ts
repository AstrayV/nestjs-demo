import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';



// import { User_Service } from '../user/user.service';

import { token_secret} from '../../config/base'

@Injectable()
export class AuthService {


  async createToken(id: number) {
    // const user: JwtPayload = { email: 'user@email.com' };
    // return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
    const token = jwt.sign({ id: id }, token_secret, { expiresIn: '24h' });

    return token;
  }

  // async verifyToken(token: string){
  //   console.log(token);
  // }


  // async validateUser(payload: JwtPayload): Promise<any> {
  //   return await this.usersService.findOneByEmail(payload.email);
  // }
}
