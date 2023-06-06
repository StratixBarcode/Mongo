import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let hello: string = this.mainHello()
    console.log(hello)
    return hello;
  }
  
  mainHello() {
    return 'Hello World!';
  }
}
