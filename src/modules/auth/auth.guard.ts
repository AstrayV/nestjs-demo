import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';


import { Observable } from 'rxjs';

import * as jwt from 'jsonwebtoken';
import { token_secret} from '../../config/base'

import {UnauthorizedException} from '@nestjs/common';


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let token = context.switchToHttp().getRequest().headers.authorization;
    if(!token) throw new UnauthorizedException();
    try {
      const decode = jwt.verify(token.split(' ')[1],token_secret);
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}