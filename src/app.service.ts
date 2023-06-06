import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.v2_Hello();
  }

  v2_Hello(): string {
    console.log('I made v2 changes')
    return 'Hello World v2!';
  }

}
