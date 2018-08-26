import * as crypto from 'crypto';



export const md5 = (str: string)=>{
    const hash = crypto.createHash('md5');
    const md5Pwd = hash.update(str).digest('hex');
    return md5Pwd;
}