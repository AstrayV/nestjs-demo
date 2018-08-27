import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

import { validate } from 'class-validator';

import { plainToClass } from 'class-transformer';
@Injectable()
export class Login_Pipe implements PipeTransform<any> {
  async transform(value,metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    // console.log(value)
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if(errors.length > 0){
      throw new BadRequestException(errors);
    }else{
      return value
    }
  }
}
