import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    const hello = this.mainHello_102()

    console.log(hello)
    return hello
  }
  
  mainHello_102(): string {
    return 'main Hello!';
  }

}
