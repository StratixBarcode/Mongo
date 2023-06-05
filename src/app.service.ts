import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.v1_Hello();
  }

  v1_Hello(): string {
    return 'Hello World v1!';
  }
  
}
