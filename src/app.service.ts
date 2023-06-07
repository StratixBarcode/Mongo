import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    const hello = this.mainHello()

    console.log(hello)
    return hello
  }
  
  mainHello(): string {
    return 'Hello main 111!';
  }

}
