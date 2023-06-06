import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.mainHello()
  }
  
  mainHello() {
    return 'Hello World!';
  }
}
