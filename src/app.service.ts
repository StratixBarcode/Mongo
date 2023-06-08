import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    const hello = this.mainHello_101()

    console.log(hello)
    return hello
  }
  
  mainHello_101(): string {
    return 'main Hello!';
  }

}
