import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.v2ZHello();
  }
  
  v2ZHello() {

    return 'Hello v2!';
  }
  

}
