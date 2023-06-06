import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.v2ZHello();
  }
  
  v2ZHello() {
    const hello = this.mainHello()
    console.log(hello)
    return 'Hello v2!';
  }
  
  mainHello() {
    return 'Hello main!';
  }
}
