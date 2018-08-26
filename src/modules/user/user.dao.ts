import {getRepository} from "typeorm";

import { User_Entity} from './user.entity'

import { sign_up_info} from './interface/user.interface'




class User_Dao {


  async add_new_user(user: sign_up_info){
    const userRepository = getRepository(User_Entity);
    const result = await userRepository.insert(user);
    return result;
  }
  
  async find_user_by_name(username: string){
    const userRepository = getRepository(User_Entity);
    const has_sign_up = await userRepository.findOne({username: username})
    return has_sign_up;
  }
}


export default new User_Dao()